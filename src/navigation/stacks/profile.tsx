import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Spacex as SpacexScreen } from '../../screens/spacex';
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
      name={NAVIGATION_ROUTES.DRAWER_SPACE_X}
      component={SpacexScreen}
      options={{
        headerRight,
        headerLeft,
        headerTitle: NAVIGATION_TITLES.DRAWER_SPACE_X,
      }}
    />
  </Stack.Navigator>
);
