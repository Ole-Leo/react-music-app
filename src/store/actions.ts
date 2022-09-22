import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { playerActions } from './slices/playerSlice';
import { filterActions } from './slices/filterSlice';

const actions = {
  ...playerActions,
  ...filterActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
