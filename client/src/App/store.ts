import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/auth/loginSlice';
import regReducer from '../features/auth/regSlice';
export const store = configureStore({
  reducer: {
    reg: regReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
