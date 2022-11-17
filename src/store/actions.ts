import { useDispatch } from 'react-redux';
import { userActions } from './slices/userSlice';
import { playerActions } from './slices/playerSlice';
import { filterActions } from './slices/filterSlice';
import { bindActionCreators } from '@reduxjs/toolkit';

const actions = {
  ...userActions,
  ...playerActions,
  ...filterActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
