import React from 'react';
import { create } from 'react-test-renderer';
import { AppProvider } from '../components/app-provider';
import { Dashboard } from '../screens/dashboard';

test('renders Dashboard component correctly', () : void => {
  const wrapper = create(
    <AppProvider>
      <Dashboard />
    </AppProvider>,
  ).toJSON();
  expect(wrapper).toMatchSnapshot();
});
