// ########## Import Dependencies Here ##########

// ########## Import Components Here ##########
import * as types from '../constants';

const initial = {
  hideIntro: true,
  showApp: false,
};

export const mainScreenReducer = (state = initial, action) => {
  switch (action.type) {
    case types.HIDE_INTRO:
      return { ...state, hideIntro: false };
    case types.SHOW_APP:
      return { ...state, hideIntro: false, showApp: true };
    case types.HIDE_APP:
      return { ...state, hideIntro: false, showApp: false };
    default:
      return state;
  }
};
