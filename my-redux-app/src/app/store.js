import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import favsReducer from '../features/slices/favsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    favs: favsReducer
  },
});
