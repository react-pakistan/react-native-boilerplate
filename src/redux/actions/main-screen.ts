import { emptyActionCreator } from '@react-pakistan/util-functions';
import { TYPES } from '../constants';

export const hideIntroAction = emptyActionCreator<
  TYPES.HIDE_INTRO
>(TYPES.HIDE_INTRO);

export const showAppAction = emptyActionCreator<
  TYPES.SHOW_APP
>(TYPES.SHOW_APP);

export const hideAppAction = emptyActionCreator<
  TYPES.HIDE_APP
>(TYPES.HIDE_APP);
