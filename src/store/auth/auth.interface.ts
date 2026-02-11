export interface IUserInfo {
  email: string;
  is_active: boolean;
  microsoft_oid: string;
  roles: string[];
  user_name: string;
}

export interface IAuthSlice {
  userRole: string[];
  userInfo: IUserInfo | null;
}
