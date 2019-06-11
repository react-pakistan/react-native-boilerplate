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
  const name = 'testName';
  const bio = 'textBio';
  const company = 'testCompany';
  const location = 'testLocation';
  const avatarUrl = 'testAvatarUrl';
  const store = mockStore(fakeInitialState);
  const dashboardAttempt = () => null;
  renderer.render(
    <Dashboard
      store={store}
      name={name}
      bio={bio}
      company={company}
      location={location}
      avatarUrl={avatarUrl}
      dashboardAttempt={dashboardAttempt}
    />
  );
  const wrapper = renderer.getRenderOutput();
  expect(wrapper).toMatchSnapshot();
});
