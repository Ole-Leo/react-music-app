import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TokenState = {
  access: string;
  refresh: string;
};

const initialState: TokenState = {
  access: '',
  refresh: '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<TokenState>) => {
      const { access, refresh } = action.payload;
      state.access = access;
      state.refresh = refresh;
    },
  },
});

export const tokenActions = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
