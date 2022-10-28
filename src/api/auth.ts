import axios from '../plugin/axios';

export interface AuthData {
  email: string;
  password: string;
}

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ResetPasswordRequest {
  email: string;
}

export interface SecurityCodePayload {
  code: string;
}

export interface NewPasswordData {
  newPassword: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshtoken: any;
}

export const login = (loginPayload: LoginRequest): Promise<LoginResponse> =>
  axios
    .post<LoginResponse>('login', { ...loginPayload })
    .then(({ data }) => data);

export const signUp = (signUpData: SignUpRequest): Promise<undefined> =>
  axios.post<undefined>('signUp', { ...signUpData }).then(({ data }) => data);

export const resetPassword = (
  resetPasswordPayload: ResetPasswordRequest
): Promise<undefined> =>
  axios
    .post<undefined>('forgotPassword', { ...resetPasswordPayload })
    .then(({ data }) => data);

export const verifySecurityCode = (
  securityCodePayload: SecurityCodePayload
): Promise<undefined> =>
  axios
    .post<undefined>('verifySecurityCode', { ...securityCodePayload })
    .then(({ data }) => data);

export const setNewPassword = (
  newPasswordData: NewPasswordData
): Promise<undefined> =>
  axios
    .post<undefined>('setNewPassword', { ...newPasswordData })
    .then(({ data }) => data);
