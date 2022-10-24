import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Auth {
  accesstoken: string;
  refreshToken: string;
}

export interface AppState {
  auth: Auth;
}

export const initialApp: AppState = {
  auth: {
    accesstoken: '',
    refreshToken: '',
  },
};

export const AppSlice = createSlice({
  name: 'app',
  initialState: initialApp,
  reducers: {
    addToken: (state, action: PayloadAction<Auth>) => {
      state.auth = action.payload;
    },
  },
});

export const { addToken } = AppSlice.actions;

export default AppSlice.reducer;
