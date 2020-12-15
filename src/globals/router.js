// ########## Import Dependencies Here ##########
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '@react-pakistan/util-react-native-functions';
import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import { shape, func } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

// ########## Import Screens Here ##########
import {
  Dashboard as DashboardScreen,
  DashboardMobile as DashboardMobileScreen,
  DashboardWeb as DashboardWebScreen,
} from '../screens/dashboard';
import { Profile as ProfileScreen } from '../screens/profile';

// ########## Import Components Here ##########
import { DrawerContent } from '../components/drawer-content';
import * as actions from '../redux/actions';
import { HeaderIcon } from '../navigation/styled';
import { NAVIGATION_ROUTES } from '../navigation/navigation-routes';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardStack = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION_ROUTES.DASHBOARD.DEFAULT}
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
          headerTitle: `${NAVIGATION_ROUTES.DASHBOARD.DEFAULT.charAt(0).toUpperCase()}${NAVIGATION_ROUTES.DASHBOARD.DEFAULT.slice(1).toLowerCase()}`,
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

const DashboardMobileStack = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION_ROUTES.DASHBOARD.TABS.MOBILE}
        component={DashboardMobileScreen}
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
          headerTitle: `${NAVIGATION_ROUTES.DASHBOARD.TABS.MOBILE.charAt(0).toUpperCase()}${NAVIGATION_ROUTES.DASHBOARD.TABS.MOBILE.slice(1).toLowerCase()}`,
        }}
      />
    </Stack.Navigator>
  );
};

DashboardMobileStack.propTypes = {
  navigation: shape({
    toggleDrawer: func.isRequired,
  }).isRequired,
};

const DashboardWebStack = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION_ROUTES.DASHBOARD.TABS.WEB}
        component={DashboardWebScreen}
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
          headerTitle: `${NAVIGATION_ROUTES.DASHBOARD.TABS.WEB.charAt(0).toUpperCase()}${NAVIGATION_ROUTES.DASHBOARD.TABS.WEB.slice(1).toLowerCase()}`,
        }}
      />
    </Stack.Navigator>
  );
};

DashboardWebStack.propTypes = {
  navigation: shape({
    toggleDrawer: func.isRequired,
  }).isRequired,
};

const ProfileStack = ({ navigation }) => {
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
          headerTitle: `${NAVIGATION_ROUTES.PROFILE.charAt(0).toUpperCase()}${NAVIGATION_ROUTES.PROFILE.slice(1).toLowerCase()}`,
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

const TabRoutes = () => (
  <Tab.Navigator
    // screenOptions={}
    backBehavior='initialRoute'
    initialRouteName={NAVIGATION_ROUTES.DASHBOARD.TABS.MAIN}
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
      safeAreaInset: { bottom: 'always', top: 'never' },
      showIcon: true,
      showLabel: true,
      style: {},
      tabStyle: {},
    }}
  >
    <Tab.Screen
      component={DashboardStack}
      name={NAVIGATION_ROUTES.DASHBOARD.TABS.MAIN}
      options={() => ({
        tabBarIcon: () => <Icon icon='MobileUiGrey19' />,
      })}
    />
    <Tab.Screen
      component={DashboardMobileStack}
      name={NAVIGATION_ROUTES.DASHBOARD.TABS.MOBILE}
      options={() => ({
        tabBarIcon: () => <Icon icon='MobileUiGrey19' />,
      })}
    />
    <Tab.Screen
      component={DashboardWebStack}
      name={NAVIGATION_ROUTES.DASHBOARD.TABS.WEB}
      options={() => ({
        tabBarIcon: () => <Icon icon='MobileUiGrey19' />,
      })}
    />
  </Tab.Navigator>
);

const DrawerRoutes = () => (
  <NavigationContainer>
    <Drawer.Navigator
      backBehavior='initialRoute'
      drawerContent={({
        descriptors,
        navigation,
        progress,
        state,
      }) => <DrawerContent
        descriptors={descriptors}
        navigation={navigation}
        progress={progress}
        state={state}
      />}
      drawerContentOptions={{
        activeTintColor: theme.colors.cherryRed,
        activeBackgroundColor: theme.colors.cherryRed,
        inactiveTintColor: theme.colors.cherryRed,
        inactiveBackgroundColor: theme.colors.cherryRed,
        itemStyle: {},
        labelStyle: {},
        contentContainerStyle: {},
        style: {},
      }}
      drawerPosition='left'
      drawerStyle={{
        backgroundColor: theme.colors.lightGrey,
        width: 240,
      }}
      drawerType='front'
      edgeWidth={20}
      // gestureHandlerProps={}
      hideStatusBar
      initialRouteName='Dashboard'
      keyboardDismissMode='on-drag'
      lazy
      minSwipeDistance={100}
      openByDefault={false}
      overlayColor={theme.colors.lightBlack}
      // sceneContainerStyle={}
      // screenOptions={}
      statusBarAnimation='fade'
    >
      <Drawer.Screen
        component={TabRoutes}
        name={NAVIGATION_ROUTES.DASHBOARD.DEFAULT}
      />
      <Drawer.Screen
        component={ProfileStack}
        name={NAVIGATION_ROUTES.PROFILE}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export const AppRouter = () => DrawerRoutes();
