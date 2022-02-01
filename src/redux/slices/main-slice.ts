import { createSlice } from '@reduxjs/toolkit';
import { IMainScreen } from 'redux/type';

const initialState : IMainScreen = {
  showApp: false,
  showOnboarding: true,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    hideApp: (state : IMainScreen) : IMainScreen => ({
      ...state,
      showOnboarding: false,
      showApp: false,
    }),
    showApp: (state : IMainScreen) : IMainScreen => ({
      ...state,
      showOnboarding: false,
      showApp: true,
    }),
    showOnboarding: (state : IMainScreen) : IMainScreen => ({
      ...state,
      showOnboarding: false,
    }),
  },
});

export const { hideApp, showApp, showOnboarding } = mainSlice.actions;
export const main = mainSlice.reducer;
