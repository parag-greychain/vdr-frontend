import { toast } from "react-toastify";
import { get, userPermissionApi, post } from "./apiClients";
import { setUserRole } from "../store/auth/authSlice";
import { store } from "../store";

const getEnvParam = (): "local" | "dev" | null => {
  const hostname = window?.location?.hostname;
  if (hostname === "localhost") return "local";
  if (hostname === "erm-ai-dev.ermtools.app") return "dev";
  return null;
};

export const getAuthLoginUrl = async () => {
  try {
    const res = await get(userPermissionApi, `auth/login`, {
      params: {
        env: getEnvParam(),
      },
    });
    if (res) {
      return res;
    }
    return res;
  } catch (error: any) {
    toast.error("Failed to get authorization URL. Please try again");
    return error;
  }
};

export const handleAuthCallback = async (code: string, state: string) => {
  try {
    const res = await get(userPermissionApi, `auth/callback`, {
      params: {
        code,
        state,
        env: getEnvParam(),
      },
    });
    if (res) {
      return res;
    }
    return res;
  } catch (error: any) {
    toast.error("Authentication failed. Please try again");
    throw error;
  }
};

export const handleMicrosoftLogout = async (refreshToken: string, accessToken: string) => {
  try {
    const res = await post(
      userPermissionApi,
      `auth/logout`,
      {
        refresh_token: refreshToken,
        access_token: accessToken,
      },
      {
        params: {
          env: getEnvParam(),
        },
      },
    );
    if (res) {
      return res.data;
    }
    return res;
  } catch (error: any) {
    toast.error("Logout failed. Please try again");
    throw error;
  }
};

export const getMicrosoftUserInfo = async (accessToken: string) => {
  try {
    const res = await get(userPermissionApi, `auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    store.dispatch(setUserRole(res?.roles));

    return res;
  } catch (error: any) {
    throw error;
  }
};
