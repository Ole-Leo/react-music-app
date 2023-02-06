import { useDispatch } from 'react-redux';
import { userActions } from './features/userSlice';
import { tokenActions } from './features/tokenSlice';
import { playerActions } from './features/playerSlice';
import { filterActions } from './features/filterSlice';
import { bindActionCreators } from '@reduxjs/toolkit';

const actions = {
  ...userActions,
  ...playerActions,
  ...filterActions,
  ...tokenActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
