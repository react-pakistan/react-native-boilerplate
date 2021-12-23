/* eslint-disable */

import { IAction } from '@react-pakistan/util-functions';
import { TYPES } from '../constants';
import { IMainScreen } from '../type';

const initial = {
  showApp: false,
  showOnboarding: true,
};

export const mainScreen = (
  state = initial,
  action : IAction,
) : IMainScreen => {
  switch (action.type) {
    case TYPES.SHOW_ONBOARDING:
      return { ...state, showOnboarding: false };
    case TYPES.SHOW_APP:
      return { ...state, showOnboarding: false, showApp: true };
    case TYPES.HIDE_APP:
      return { ...state, showOnboarding: false, showApp: false };
    default:
      return state;
  }
};
