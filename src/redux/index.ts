import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { appReducer, configureStore } from './store';

export { useAppStateSelector } from './use-app-state-selector';
export { useAppDispatch } from './use-app-dispatch';
export const { store } = configureStore();
export type RootState = ReturnType<typeof appReducer>;
export type ThunkResult<R> = ThunkAction<R, RootState, unknown, AnyAction>;
export type AppDispatch<RespType> = ThunkDispatch<
  RootState,
  RespType,
  AnyAction
>;
export type AppState = RootState;
