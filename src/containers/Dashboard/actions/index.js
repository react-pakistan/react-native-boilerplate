/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########

// ########## Import Components Here ##########
import * as types from "../constants";

// ########## Import MainScreen Actions Here ##########
export const dashboardAttemptAction = username => ({
  type: types.DASHBOARD_ATTEMPT,
  payload: username
});

export const dashboardSuccessAction = data => ({
  type: types.DASHBOARD_SUCCESS,
  payload: data
});

export const dashboardFailAction = err => ({
  type: types.DASHBOARD_FAIL,
  payload: err
});
