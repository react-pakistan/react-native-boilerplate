import { ThemeProvider } from 'styled-components/native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Dashboard } from '../screens/dashboard';
import { appTheme } from '../theme';

test('renders Dashboard component correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <ThemeProvider theme={appTheme}>
      <Dashboard />
    </ThemeProvider>
  );
  const wrapper = renderer.getRenderOutput();
  expect(wrapper).toMatchSnapshot();
});
