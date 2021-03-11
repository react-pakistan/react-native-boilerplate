import { IAction } from '@react-pakistan/util-functions';
import { TYPES } from '../constants';

const initial = {
  hideIntro: true,
  showApp: false,
};

export const mainScreen = (
  state = initial,
  action : IAction
) : any => {
  switch (action.type) {
    case TYPES.HIDE_INTRO:
      return { ...state, hideIntro: false };
    case TYPES.SHOW_APP:
      return { ...state, hideIntro: false, showApp: true };
    case TYPES.HIDE_APP:
      return { ...state, hideIntro: false, showApp: false };
    default:
      return state;
  }
};
