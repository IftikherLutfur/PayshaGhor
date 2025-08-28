export interface RegisterPayload {
  email: string;
  password: string;
  role: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface IUserUpdate{
    name?:string;
    email?:string;
    currentPassword: string
    newPassword?:string;
}