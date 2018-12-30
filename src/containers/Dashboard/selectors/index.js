/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import { createSelector } from 'reselect';

export const getDashboard = state => state.dashboardReducer.data;

export const getUserName = createSelector(
  [ getDashboard ],
  data => data.name
);

export const getUserBio = createSelector(
  [ getDashboard ],
  data => data.bio
);

export const getUserCompany = createSelector(
  [ getDashboard ],
  data => data.company
);

export const getUserLocation = createSelector(
  [ getDashboard ],
  data => data.location
);

export const getUserAvatarUrl = createSelector(
  [ getDashboard ],
  data => data.avatarUrl
);
