/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import configureStore from "redux-mock-store";

// ########## Import Components Here ##########
import MainScreen from "../containers/MainScreen";

// ########## Create Initial State ##########
const fakeInitialState = {
  showAppReducer: {
    showApp: true,
  }
};

const mockStore = configureStore();

test("renders MainScreen compomenent correctly", () => {
  const renderer = new ShallowRenderer();
  const showApp = false;
  const store = mockStore(fakeInitialState);
  const showAppAction = () => null;
  renderer.render(<MainScreen store={store} showApp={showApp} showAppAction={showAppAction} />);
  const wrapper = renderer.getRenderOutput();
  expect(wrapper).toMatchSnapshot();
});
