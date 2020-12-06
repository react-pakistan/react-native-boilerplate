// ########## Import Dependencies Here ##########

// ########## Import Components Here ##########
import * as types from '../constants';

const initialState = {
  error: null,
  loading: false,
  userData: null,
};

export const profileScreen = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_PROFILE_ATTEMPT:
      return { ...state, loading: true };
    case types.FETCH_DATA_PROFILE_SUCCESS:
      return { ...state, loading: false, userData: { ...action.payload } };
    case types.FETCH_DATA_PROFILE_FAIL:
      return { ...state, loading: false, error: { ...action.payload } };
    default:
      return state;
  }
};
