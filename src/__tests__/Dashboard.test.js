/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

// ########## Import Components Here ##########
import Dashboard from "../containers/Dashboard";

test("renders Dashboard compomenent correctly", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Dashboard />);
  const wrapper = renderer.getRenderOutput();
  expect(wrapper).toMatchSnapshot();
});
