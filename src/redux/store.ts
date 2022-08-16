import { useDispatch } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterReducer from './filter/slice';
import cartReducer from './cart/slice';
import pizzasReducer from './pizzas/slice';
import pizzaReducer from './pizza/slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter', 'pizzas', 'pizza'],
};

const reducer = combineReducers({
  filter: filterReducer,
  cart: cartReducer,
  pizzas: pizzasReducer,
  pizza: pizzaReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
