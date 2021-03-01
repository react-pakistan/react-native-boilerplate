import { IState } from '../type';

export const getHideIntro = (state : IState) : boolean => state.mainScreen.hideIntro;
export const getShowApp = (state : IState) : boolean => state.mainScreen.showApp;
