import { useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../redux/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
