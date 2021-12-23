import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { DashboardMobile as DashboardMobileScreen } from '../../screens/dashboard';
import { NAVIGATION_ROUTES, NAVIGATION_TITLES } from '../navigation-routes';
import { headerLeft } from './header-left';
import { headerRight } from './header-right';

const Stack = createStackNavigator();

export const DashboardMobileStack = () : ReactElement => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={NAVIGATION_ROUTES.TAB_MOBILE}
      component={DashboardMobileScreen}
      options={{
        headerRight,
        headerLeft,
        headerTitle: NAVIGATION_TITLES.TAB_MOBILE,
      }}
    />
  </Stack.Navigator>
);
