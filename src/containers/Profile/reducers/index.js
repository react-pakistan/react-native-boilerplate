/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########

// ########## Import Components Here ##########
import * as types from "../constants";

const initial = {
  show: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.TEST:
      return { ...state, show: true };
    default:
      return state;
  }
};
