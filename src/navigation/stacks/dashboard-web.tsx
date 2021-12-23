import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { DashboardWeb as DashboardWebScreen } from '../../screens/dashboard';
import { NAVIGATION_ROUTES, NAVIGATION_TITLES } from '../navigation-routes';
import { headerLeft } from './header-left';
import { headerRight } from './header-right';

const Stack = createStackNavigator();

export const DashboardWebStack = () : ReactElement => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={NAVIGATION_ROUTES.TAB_WEB}
      component={DashboardWebScreen}
      options={{
        headerRight,
        headerLeft,
        headerTitle: NAVIGATION_TITLES.TAB_WEB,
      }}
    />
  </Stack.Navigator>
);
