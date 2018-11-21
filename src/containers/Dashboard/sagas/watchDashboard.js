/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import { takeEvery, takeLatest, all, fork } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as types from "../constants";
import dashboardSaga from "./dashboardSaga";

export function* watchDashboard() {
  yield takeLatest(types.DASHBOARD_ATTEMPT, dashboardSaga);
}
