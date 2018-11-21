/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########

// ########## Import Components Here ##########
import * as types from "../constants";

const initial = {
  data: null,
  error: null,
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.DASHBOARD_SUCCESS:
      return { ...state, data: action.payload };
    case types.DASHBOARD_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
