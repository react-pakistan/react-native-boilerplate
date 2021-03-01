// ########## Import Dependencies Here ##########
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

// ########## Import Components Here ##########
import { OnBoarding } from '../screens/on-boarding';

// ########## Create Initial State ##########
const fakeInitialState = {
  showAppReducer: {
    showApp: true,
  },
};

const mockStore = configureStore();

test('renders Dashboard component correctly', () => {
  const renderer = new ShallowRenderer();
  const store = mockStore(fakeInitialState);
  renderer.render(
    <Provider store={store}>
      <OnBoarding />
    </Provider>,
  );
  const wrapper = renderer.getRenderOutput();
  expect(wrapper).toMatchSnapshot();
});
