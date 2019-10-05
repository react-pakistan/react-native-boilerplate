// ########## Import Components Here ##########
import * as types from '../constants';

const initial = {
  show: false,
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.TEST:
      return { ...state, show: true };
    default:
      return state;
  }
};
