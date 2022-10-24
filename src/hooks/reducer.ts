import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from 'src/store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
