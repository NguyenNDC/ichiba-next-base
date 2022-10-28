import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ResetPasswordRequest,
  login,
  LoginRequest,
  signUp,
  SignUpRequest,
  resetPassword,
  verifySecurityCode,
  SecurityCodePayload,
  NewPasswordData,
  setNewPassword,
} from '@/api/auth';

export const doLogin = createAsyncThunk(
  'auth/doLogin',
  async (loginPayload: LoginRequest, { dispatch }) =>
    login(loginPayload).then((res) => {
      return res;
    })
);

export const doSignUp = createAsyncThunk(
  'auth/doSignUp',
  async (signUpPayload: SignUpRequest) => signUp(signUpPayload)
);

export const doResetPassword = createAsyncThunk(
  'auth/doResetPassword',
  async (resetPassPayload: ResetPasswordRequest) =>
    resetPassword(resetPassPayload)
);

export const doVerifySecurityCode = createAsyncThunk(
  'auth/doVerifySecurityCode',
  async (securityCodePayload: SecurityCodePayload) =>
    verifySecurityCode(securityCodePayload)
);

export const doSetNewPassword = createAsyncThunk(
  'auth/doSetNewPassword',
  async (newPasswordData: NewPasswordData) => setNewPassword(newPasswordData)
);

export const doLogout = createAsyncThunk(
  'auth/doLogout',
  (payload, { dispatch }) => {
    //delete token
  }
);
