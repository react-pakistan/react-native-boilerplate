import { IState } from '../type';

export const getShowOnboarding = (state : IState) : boolean => state.mainScreen.showOnboarding;
export const getShowApp = (state : IState) : boolean => state.mainScreen.showApp;
