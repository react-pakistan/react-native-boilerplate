/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import { takeEvery, takeLatest, all, fork } from "redux-saga/effects";

// ########## Import Components Here ##########
import { watchDashboard } from "../containers/Dashboard/sagas/watchDashboard";

export default function* rootSaga() {
  yield all([
    fork(watchDashboard),
  ]);
}
