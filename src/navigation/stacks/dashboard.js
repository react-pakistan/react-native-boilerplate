import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_ROUTES } from '../navigation-routes';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { Dashboard as DashboardScreen } from '../../screens/dashboard';
import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import { HeaderIcon } from '../styled';
import { shape, func } from 'prop-types';

const Stack = createStackNavigator();

export const DashboardStack = ({
  navigation,
}) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION_ROUTES.TAB_MAIN}
        component={DashboardScreen}
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
          headerLeft: () => (
            <HeaderIcon
              onPress={() => navigation.toggleDrawer()}
            >
              <Icon
                icon='MobileUiGrey15'
              />
            </HeaderIcon>
          ),
          headerTitle: `${NAVIGATION_ROUTES.TAB_MAIN.charAt(0).toUpperCase()}${NAVIGATION_ROUTES.TAB_MAIN.slice(1).toLowerCase()}`,
        }}
      />
    </Stack.Navigator>
  );
};

DashboardStack.propTypes = {
  navigation: shape({
    toggleDrawer: func.isRequired,
  }).isRequired,
};
