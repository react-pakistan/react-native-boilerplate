// ########## Import Dependencies Here ##########

// ########## Import Components Here ##########
import * as types from '../constants';

export const hideIntroAction = () => ({
  type: types.HIDE_INTRO,
});

export const showAppAction = () => ({
  type: types.SHOW_APP,
});

export const hideAppAction = () => ({
  type: types.HIDE_APP,
});
