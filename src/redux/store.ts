import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
} from 'redux';

import thunk from 'redux-thunk';
import { movieDetailsReducer, moviesReducer } from './movies/reducer';

export const appReducer = combineReducers({
  movies: moviesReducer,
  movie: movieDetailsReducer,
});

export type RootState = ReturnType<typeof appReducer>;

export const rootReducer = (
  state: RootState | undefined,
  action: AnyAction,
) => {
  return appReducer(state, action);
};

export const configureStore = (): {
  store: Store<RootState>;
} => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return { store };
};
