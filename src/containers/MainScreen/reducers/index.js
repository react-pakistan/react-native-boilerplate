/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########

// ########## Import Components Here ##########
import * as types from "../constants";

const initial = {
  showApp: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.SHOW_APP:
      return { ...state, showApp: true };
    default:
      return state;
  }
};
