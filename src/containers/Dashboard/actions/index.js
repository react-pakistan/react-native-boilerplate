/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########

// ########## Import Components Here ##########
import * as types from "../constants";
import apiCaller from '../../../config/apiCaller';
import ENDPOINTS, { REQUEST_TYPES } from '../../../config/endpoints';

// ########## Import MainScreen Actions Here ##########
export const dashboardSuccessAction = data => ({
  type: types.DASHBOARD_SUCCESS,
  payload: data
});

export const dashboardFailAction = err => ({
  type: types.DASHBOARD_FAIL,
  payload: err
});

// ########## Thunk Logic Goes Here ##########
export const dashboardAttemptAction = username => {
  const thunk = async function thunk(dispatch) {
    try {
      const data = await apiCaller(REQUEST_TYPES.GET, `${ENDPOINTS.GITHUB_USERS}/${username}`, null, null);
      dispatch(dashboardSuccessAction(data));
    } catch (err) {
      dispatch(dashboardFailAction(err));
    }
  };
  return thunk;
};
