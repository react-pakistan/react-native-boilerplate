/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import { createSelector } from 'reselect';

export const getUserName = createSelector(store => store.dashboardReducer, dashboardReducer => dashboardReducer.data, data => data.name );

export const getUserBio = createSelector(store => store.dashboardReducer, dashboardReducer => dashboardReducer.data, data => data.bio );

export const getUserCompany = createSelector(store => store.dashboardReducer, dashboardReducer => dashboardReducer.data, data => data.company );

export const getUserLocation = createSelector(store => store.dashboardReducer, dashboardReducer => dashboardReducer.data, data => data.location );
