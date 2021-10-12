import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import type { RootState, AppDispatch } from './manage_state/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useQuery = (): URLSearchParams => new URLSearchParams(useLocation().search);