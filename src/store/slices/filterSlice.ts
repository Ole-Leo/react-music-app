import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterState = {
  filter: string[];
  year: string[];
};

const initialState: FilterState = {
  filter: [],
  year: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter(state, action: PayloadAction<string>) {
      state.filter.push(action.payload);
    },
    cleanFilter(state, action: PayloadAction<string>) {
      state.filter = state.filter.filter(name => name !== action.payload);
    },
  },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
