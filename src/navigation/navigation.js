import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import { Dashboard as DashboardScreen } from '../screens/dashboard';
import { NAVIGATION_ROUTES } from './navigation-routes';
import { HeaderIcon } from './styled';

const Stack = createStackNavigator();

export const DashboardStack = () => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={DashboardScreen}
        name={NAVIGATION_ROUTES.SCREEN_DASHBOARD}
        options={{
          headerRight: () => (
            <HeaderIcon
              onPress={() => dispatch(actions.hideAppAction())}
            >
              <Icon
                icon='MobileUiGrey9'
              />
            </HeaderIcon>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
