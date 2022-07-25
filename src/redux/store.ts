import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
} from 'redux';
import { Persistor } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { movieDetailsReducer, moviesReducer } from './movies/reducer';

const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
};

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
  persistor: Persistor;
} => {
  const persistedReducer = persistReducer<RootState>(
    persistConfig,
    rootReducer,
  );
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
};
