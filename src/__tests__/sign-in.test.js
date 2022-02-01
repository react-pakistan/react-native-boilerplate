import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { SignIn } from '../screens/sign-in';

const fakeInitialState = {
  showAppReducer: {
    showApp: true,
  },
};

const mockStore = configureStore();

test('renders SignIn component correctly', () => {
  const renderer = new ShallowRenderer();
  const showApp = false;
  const store = mockStore(fakeInitialState);
  const showAppAction = () => null;
  renderer.render(
    <Provider store={store}>
      <SignIn showApp={showApp} showAppAction={showAppAction} />
    </Provider>,
  );
  const wrapper = renderer.getRenderOutput();
  expect(wrapper).toMatchSnapshot();
});
