/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import { put, call } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as actions from "../actions";
import apiCaller from "../../../config/apiCaller";
import ENDPOINTS, { REQUEST_TYPES } from "../../../config/endpoints";

export default function* dashboardSaga({ payload }) {
  try {
    const data = yield call(apiCaller, REQUEST_TYPES.GET, `${ENDPOINTS.GITHUB_USERS}/${payload}`, null, null);
    yield put(actions.dashboardSuccessAction(data));
  } catch (error) {
    yield put(actions.dashboardFailAction(error));
  }
}
