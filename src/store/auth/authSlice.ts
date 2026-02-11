import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import type { IAuthSlice, IUserInfo } from "./auth.interface";

const initialState: IAuthSlice = {
  userRole: [],
  userInfo: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      Object.assign(state, initialState);
    });
  },
  reducers: {
    setUserRole: (state, action: PayloadAction<string[]>) => {
      state.userRole = action.payload;
    },

    setUserInfo: (state, action: PayloadAction<IUserInfo | null>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserRole, setUserInfo } = authSlice.actions;

export default authSlice.reducer;
