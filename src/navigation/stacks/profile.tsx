import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Profile as ProfileScreen } from '../../screens/profile';
import { NAVIGATION_ROUTES, NAVIGATION_TITLES } from '../navigation-routes';
import { headerLeft } from './header-left';
import { headerRight } from './header-right';

const Stack = createStackNavigator();

export const ProfileStack = () : ReactElement => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={NAVIGATION_ROUTES.DRAWER_PROFILE}
      component={ProfileScreen}
      options={{
        headerRight,
        headerLeft,
        headerTitle: NAVIGATION_TITLES.DRAWER_PROFILE,
      }}
    />
  </Stack.Navigator>
);
