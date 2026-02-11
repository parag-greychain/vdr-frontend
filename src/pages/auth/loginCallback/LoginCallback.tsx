import { Button } from "antd";
import { useEffect, type FC } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getMicrosoftUserInfo, handleAuthCallback } from "../../../services/microsoftAuth.service";
import { IMAGES, LocalStorageName, PATHS, X_userId } from "../../../shared";
import "../../../pages/auth/login/Login.scss";
import "./LoginCallback.scss";
import { useChat } from "../../../shared/hooks/useChat";
import { setUserInfo } from "../../../store/auth/authSlice";

const LoginCallback: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { fetchChatHistory } = useChat();
  const dispatch = useDispatch();

  useEffect(() => {
    const processCallback = async () => {
      try {
        const code = searchParams.get("code");
        const state = searchParams.get("state");

        if (!code || !state) {
          toast.error("Invalid callback parameters");
          navigate(PATHS.login);
          return;
        }

        // Verify state matches what we stored
        const storedState = localStorage.getItem("ms_auth_state");
        if (storedState !== state) {
          toast.error("Invalid authentication state");
          navigate(PATHS.login);
          return;
        }

        // Call the callback API
        const response = await handleAuthCallback(code, state);
        const userInfo = await getMicrosoftUserInfo(response?.access_token);

        dispatch(setUserInfo(userInfo));

        localStorage.setItem(X_userId, userInfo?.user_name);

        if (response && response.access_token) {
          // Store the access token and refresh token
          localStorage.setItem(LocalStorageName.Token, response.access_token);
          if (response.refresh_token) {
            localStorage.setItem(LocalStorageName.RefreshToken, response.refresh_token);
          }

          // Clean up the state
          localStorage.removeItem("ms_auth_state");
          fetchChatHistory();
          // getProjectListForDropdown();

          navigate(PATHS.home);
        } else {
          toast.error("Authentication failed");
          navigate(PATHS.login);
        }
      } catch (error) {
        console.error("Callback processing error:", error);
        toast.error("Authentication failed. Please try again");
        navigate(PATHS.login);
      }
    };

    processCallback();
  }, [navigate, searchParams]);

  return (
    <div className="login-container">
      {/* LEFT SECTION */}
      <div className="login-left">
        <img src={IMAGES.logo} alt="ERM Logo" className="erm-logo" />
        <div className="content-wrapper">
          <h1 className="title">M&A Workflow & Intelligence Platform </h1>
          <p>
            A unified, AI-powered platform for M&A teams to manage deal workflows, documents, and
            insights seamlessly integrated with existing VDRs and data sources.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="login-right">
        <div className="login-box">
          <h3>Login</h3>
          <Button type="default" className="login-btn" loading={true}>
            <img src={IMAGES.microsoft} alt="microsoft" /> Completing authentication...
          </Button>
          <div className="links">
            <a href="#">Contact Support</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCallback;
