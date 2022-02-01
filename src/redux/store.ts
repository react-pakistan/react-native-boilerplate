import { configureStore } from '@reduxjs/toolkit';
import { IState } from './type';
import { main } from './slices/main-slice';

export const store = configureStore<IState>({
  reducer: {
    main,
  },
});

export type AppDispatch = typeof store.dispatch;
