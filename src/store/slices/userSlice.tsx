import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUserData } from '../../models/types';

const initialState: AuthUserData = {
  email: '',
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
