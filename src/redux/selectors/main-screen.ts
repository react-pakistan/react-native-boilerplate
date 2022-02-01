import { IState } from '../type';

export const getShowOnboarding = (state : IState) : boolean => state.main.showOnboarding;
export const getShowApp = (state : IState) : boolean => state.main.showApp;
