// ########## Import Dependencies Here ##########

// ########## Import Components Here ##########
import apiCaller from '../../../globals/api-caller';
import { ENDPOINTS, REQUEST_TYPES, BASE_URL } from '../../../globals/endpoints';
import * as types from '../constants';

export const fetchProfileDataAttempt = () => ({
  type: types.FETCH_DATA_PROFILE_ATTEMPT,
});

export const fetchProfileDataSuccess = (data) => ({
  type: types.FETCH_DATA_PROFILE_SUCCESS,
  payload: data,
});

export const fetchProfileDataFail = (data) => ({
  type: types.FETCH_DATA_PROFILE_FAIL,
  payload: data,
});

export const fetchProfileData = (username) => {
  const thunk = async (dispatch) => {
    dispatch(fetchProfileDataAttempt());
    try {
      const data = await apiCaller(REQUEST_TYPES.GET, `${BASE_URL}${ENDPOINTS.GITHUB_USERS}/${username}`, null, null);
      dispatch(fetchProfileDataSuccess(data));
    } catch (err) {
      dispatch(fetchProfileDataFail(err));
    }
  };
  return thunk;
};
