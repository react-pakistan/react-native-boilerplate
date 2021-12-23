import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Dashboard as DashboardScreen } from '../../screens/dashboard';
import { NAVIGATION_ROUTES, NAVIGATION_TITLES } from '../navigation-routes';
import { headerLeft } from './header-left';
import { headerRight } from './header-right';

const Stack = createStackNavigator();

export const DashboardStack = () : ReactElement => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      component={DashboardScreen}
      name={NAVIGATION_ROUTES.TAB_MAIN}
      options={{
        headerRight,
        headerLeft,
        headerTitle: NAVIGATION_TITLES.TAB_MAIN,
      }}
    />
  </Stack.Navigator>
);
