import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import { shape, func } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { Profile as ProfileScreen } from '../../screens/profile';
import { resolveToSentenceCase } from '../../utils';
import { NAVIGATION_ROUTES } from '../navigation-routes';
import { HeaderIcon } from '../styled';

const Stack = createStackNavigator();

export const ProfileStack = ({
  navigation,
}) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION_ROUTES.PROFILE}
        component={ProfileScreen}
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
          headerTitle: resolveToSentenceCase(NAVIGATION_ROUTES.PROFILE),
        }}
      />
    </Stack.Navigator>
  );
};

ProfileStack.propTypes = {
  navigation: shape({
    toggleDrawer: func.isRequired,
  }).isRequired,
};
