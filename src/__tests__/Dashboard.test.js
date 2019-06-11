/* eslint-disable no-undef */
/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';

// ########## Import Components Here ##########
import Dashboard from '../containers/Dashboard';

// ########## Create Initial State ##########
const fakeInitialState = {
  dashboardReducer: {
    data: null,
    error: null,
  },
};

const mockStore = configureStore();

test('renders Dashboard componenent correctly', () => {
  const renderer = new ShallowRenderer();
  const store = mockStore(fakeInitialState);
  const dashboardAttempt = () => null;
  renderer.render(<Dashboard store={store} dashboardAttempt={dashboardAttempt} />);
  const wrapper = renderer.getRenderOutput();
  expect(wrapper).toMatchSnapshot();
});
