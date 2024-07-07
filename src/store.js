import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';

export const store = configureStore({
    devTools: false,
    reducer: {
        todo: todoReducer,
    },
});
