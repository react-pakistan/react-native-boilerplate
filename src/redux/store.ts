import { configureStore } from '@reduxjs/toolkit';
import { main } from './slices/main-slice';
import { IState } from './type';

export const store = configureStore<IState>({
  reducer: {
    main,
  },
});

export type AppDispatch = typeof store.dispatch;
