import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUserData } from '../../models/types';
import { removeTokensFromCookies } from '../../utils/utils';

const initialState: AuthUserData = {
  id: undefined,
  email: '',
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      removeTokensFromCookies();
      return initialState;
    },
    setUser: (state, action: PayloadAction<AuthUserData>) => {
      return action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
export const { logout } = userSlice.actions;
