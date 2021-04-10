import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import { IRNTheme } from '@react-pakistan/util-react-native-functions';
import React, { ReactElement, memo } from 'react';
import { withTheme } from 'styled-components/native';
import { NAVIGATION_ROUTES, NAVIGATION_TITLES } from '../navigation-routes';
import { DashboardStack, DashboardMobileStack, DashboardWebStack } from '../stacks';

const Tab = createBottomTabNavigator();

export const MainTab = memo(withTheme(({
  theme,
} : IMainTabProps) : ReactElement => (
  <Tab.Navigator
    // screenOptions={}
    backBehavior='initialRoute'
    initialRouteName={NAVIGATION_ROUTES.TAB_MAIN}
    lazy
    // tabBar={}
    tabBarOptions={{
      activeBackgroundColor: theme.colors.lightGrey,
      activeTintColor: theme.colors.cherryRed,
      adaptive: true,
      allowFontScaling: true,
      inactiveBackgroundColor: theme.colors.white,
      inactiveTintColor: theme.colors.lightBlack,
      keyboardHidesTabBar: false,
      labelPosition: 'below-icon',
      labelStyle: {},
      // safeAreaInset: { bottom: 'always', top: 'never' },
      // showIcon: true,
      showLabel: true,
      style: {},
      tabStyle: {},
    }}
  >
    <Tab.Screen
      component={DashboardStack}
      name={NAVIGATION_TITLES.TAB_MAIN}
      options={() => ({
        tabBarIcon: () => <Icon icon='MobileUiGrey19' />,
      })}
    />
    <Tab.Screen
      component={DashboardMobileStack}
      name={NAVIGATION_TITLES.TAB_MOBILE}
      options={() => ({
        tabBarIcon: () => <Icon icon='MobileUiGrey29' />,
      })}
    />
    <Tab.Screen
      component={DashboardWebStack}
      name={NAVIGATION_TITLES.TAB_WEB}
      options={() => ({
        tabBarIcon: () => <Icon icon='MobileUiGrey18' />,
      })}
    />
  </Tab.Navigator>
)));

export interface IMainTabProps {
  /**
   *
   */
  theme : IRNTheme;
}
