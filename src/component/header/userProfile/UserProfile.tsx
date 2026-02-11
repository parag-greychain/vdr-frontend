import { Avatar, Dropdown, type MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { cleanupAndNavigate, LocalStorageName } from "../../../shared";
import { handleMicrosoftLogout } from "../../../services/microsoftAuth.service";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem(LocalStorageName.Token);
      const refreshToken = localStorage.getItem(LocalStorageName.RefreshToken);

      if (accessToken && refreshToken) {
        const response = await handleMicrosoftLogout(refreshToken, accessToken);
        // Redirect to Microsoft logout URL (same pattern as login)
        if (response && response?.microsoft_logout_url) {
          // Redirect to Microsoft logout URL
          // Cleanup will happen on the callback page after Microsoft redirects back
          window.location.href = response.microsoft_logout_url;
          return;
        }
      }
      // If no Microsoft logout URL or tokens, proceed with cleanup
      cleanupAndNavigate(navigate);
    } catch (error) {
      console.error("Logout error:", error);
      cleanupAndNavigate(navigate);
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "configuration",
      label: "Configuration",
      icon: <i className="erm-icon settings"></i>,
      className: "common-dropdown-item",
    },
    {
      key: "guides",
      label: "Guides",
      icon: <i className="erm-icon guides"></i>,
      className: "common-dropdown-item",
    },
    {
      key: "logout",
      label: "Logout",
      icon: <i className="erm-icon logout"></i>,
      className: "common-dropdown-item",
      onClick: () => handleLogout(),
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]} className="user-profile-dropdown">
      <Avatar className="userAvatar" style={{ cursor: "pointer" }}>
        S
      </Avatar>
    </Dropdown>
  );
};

export default UserProfile;
