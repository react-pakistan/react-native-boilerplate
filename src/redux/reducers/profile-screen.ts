/* eslint-disable */

import { IAction } from '@react-pakistan/util-functions';
import { TYPES } from '../constants';
import { IProfileScreen } from '../type';

const initialState = {
  error: null,
  isLoading: false,
  userData: null,
};

export const profileScreen = (
  state = initialState,
  action : IAction,
) : IProfileScreen => {
  switch (action.type) {
    case TYPES.FETCH_DATA_PROFILE_ATTEMPT:
      return { ...state, isLoading: true };
    case TYPES.FETCH_DATA_PROFILE_SUCCESS:
      return { ...state, isLoading: false, userData: { ...action.data } };
    case TYPES.FETCH_DATA_PROFILE_FAIL:
      return { ...state, isLoading: false, error: { ...action.data } };
    default:
      return state;
  }
};
