import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { playerActions } from './playerSlice';
import { filterActions } from './filterSlice';

const actions = {
  ...playerActions,
  ...filterActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
