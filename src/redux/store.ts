import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';
import pizzasReducer from './slices/pizzasSlice';
import pizzaReducer from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    pizzas: pizzasReducer,
    pizza: pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
