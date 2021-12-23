import { emptyActionCreator } from '@react-pakistan/util-functions';
import { TYPES } from '../constants';

export const showOnboardingAction = emptyActionCreator<
TYPES.SHOW_ONBOARDING
>(TYPES.SHOW_ONBOARDING);

export const showAppAction = emptyActionCreator<
TYPES.SHOW_APP
>(TYPES.SHOW_APP);

export const hideAppAction = emptyActionCreator<
TYPES.HIDE_APP
>(TYPES.HIDE_APP);
