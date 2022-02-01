// ########## Import Dependencies Here ##########
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Profile } from '../screens/profile';

const fakeInitialState = {
  showAppReducer: {
    showApp: true,
  },
};

const mockStore = configureStore();

test('renders Profile component correctly', () => {
  const renderer = new ShallowRenderer();
  const store = mockStore(fakeInitialState);
  renderer.render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );
  const wrapper = renderer.getRenderOutput();
  expect(wrapper).toMatchSnapshot();
});
