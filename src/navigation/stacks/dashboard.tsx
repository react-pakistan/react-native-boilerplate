import { IEmptyAction } from '@react-pakistan/util-functions/action-creator-factories';
import { DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import React, { ReactElement, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { hideAppAction } from '../../redux/actions';
import { TYPES } from '../../redux/constants';
import { Dashboard as DashboardScreen } from '../../screens/dashboard';
import { NAVIGATION_ROUTES, NAVIGATION_TITLES } from '../navigation-routes';
import { HeaderIcon } from '../styled';

const Stack = createStackNavigator();

export const DashboardStack = () : ReactElement => {
  // dispatch
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={DashboardScreen}
        name={NAVIGATION_ROUTES.TAB_MAIN}
        options={{
          headerRight: () : ReactNode => (
            <HeaderIcon
              onPress={() : IEmptyAction<TYPES.HIDE_APP> => dispatch(hideAppAction())}
            >
              <Icon
                icon='MobileUiGrey9'
              />
            </HeaderIcon>
          ),
          headerLeft: () : ReactNode => (
            <HeaderIcon
              onPress={() : any => DrawerActions.toggleDrawer()}
            >
              <Icon
                icon='MobileUiGrey15'
              />
            </HeaderIcon>
          ),
          headerTitle: NAVIGATION_TITLES.TAB_MAIN,
        }}
      />
    </Stack.Navigator>
  );
};
