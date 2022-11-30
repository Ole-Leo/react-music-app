import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUserData } from '../../models/types';

const initialState: AuthUserData = {
  id: undefined,
  email: '',
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<AuthUserData>) => {
      return action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
