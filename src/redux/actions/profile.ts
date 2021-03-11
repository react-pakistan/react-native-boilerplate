import { emptyActionCreator, payloadActionCreator } from '@react-pakistan/util-functions';

import apiCaller from '../../globals/api-caller';
import { ENDPOINTS, REQUEST_TYPES, BASE_URL } from '../../globals/endpoints';
import { TYPES } from '../constants';

export const fetchProfileDataAttempt = emptyActionCreator<
  TYPES.FETCH_DATA_PROFILE_ATTEMPT
>(TYPES.FETCH_DATA_PROFILE_ATTEMPT);

export const fetchProfileDataSuccess = payloadActionCreator<
  TYPES.FETCH_DATA_PROFILE_SUCCESS,
  any
>(TYPES.FETCH_DATA_PROFILE_SUCCESS);

export const fetchProfileDataFail = payloadActionCreator<
  TYPES.FETCH_DATA_PROFILE_FAIL,
  any
>(TYPES.FETCH_DATA_PROFILE_FAIL);

export const fetchProfileData = (username : string) : any => {
  const thunk = async (dispatch : any) : Promise<any> => {
    dispatch(fetchProfileDataAttempt());
    try {
      const data = await apiCaller(REQUEST_TYPES.GET, `${BASE_URL}${ENDPOINTS.GITHUB_USERS}/${username}`);
      dispatch(fetchProfileDataSuccess(data));
    } catch (err) {
      dispatch(fetchProfileDataFail(err));
    }
  };
  return thunk;
};
