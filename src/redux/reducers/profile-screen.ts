import { IAction } from '@react-pakistan/util-functions';
import { TYPES } from '../constants';

const initialState = {
  error: null,
  loading: false,
  userData: null,
};

export const profileScreen = (
  state = initialState,
  action : IAction,
) : any => {
  switch (action.type) {
    case TYPES.FETCH_DATA_PROFILE_ATTEMPT:
      return { ...state, loading: true };
    case TYPES.FETCH_DATA_PROFILE_SUCCESS:
      return { ...state, loading: false, userData: { ...action.data } };
    case TYPES.FETCH_DATA_PROFILE_FAIL:
      return { ...state, loading: false, error: { ...action.data } };
    default:
      return state;
  }
};
