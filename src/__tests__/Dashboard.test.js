// ########## Import Dependencies Here ##########
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// ########## Import Components Here ##########
import { Dashboard } from '../screens/dashboard';

test('renders Dashboard component correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Dashboard />);
  const wrapper = renderer.getRenderOutput();
  expect(wrapper).toMatchSnapshot();
});
