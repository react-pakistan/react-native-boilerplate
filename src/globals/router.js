// ########## Import Dependencies Here ##########
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '@react-pakistan/react-native-commons-collection/theme';
import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import { shape, func } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

// ########## Import Screens Here ##########
import { Dashboard as DashboardScreen } from '../screens/dashboard';
import { Profile as ProfileScreen } from '../screens/profile';

// ########## Import Components Here ##########
import { DrawerContent } from '../components/drawer-content';
import * as actions from '../screens/main-screen/actions';
import { HeaderIcon } from './styled';

export const ROUTE_PATHS = {
  DASHBOARD: {
    DEFAULT: 'dashboard',
    TABS: {
      MAIN: 'main',
      MOBILE: 'mobile',
      WEB: 'web',
    },
  },
  PORFILE: 'profile',
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardStack = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_PATHS.DASHBOARD.DEFAULT}
        component={DashboardScreen}
        options={{
          headerRight: () => (
            <HeaderIcon
              onPress={() => dispatch(actions.hideAppAction())}
            >
              <Icon
                icon='mobileuigrey9'
              />
            </HeaderIcon>
          ),
          headerLeft: () => (
            <HeaderIcon
              onPress={() => navigation.toggleDrawer()}
            >
              <Icon
                icon='mobileuigrey15'
              />
            </HeaderIcon>
          ),
          headerTitle: `${ROUTE_PATHS.DASHBOARD.DEFAULT.charAt(0).toUpperCase()}${ROUTE_PATHS.DASHBOARD.DEFAULT.slice(1).toLowerCase()}`,
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

const ProfileStack = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_PATHS.PORFILE}
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <HeaderIcon
              onPress={() => dispatch(actions.hideAppAction())}
            >
              <Icon
                icon='mobileuigrey9'
              />
            </HeaderIcon>
          ),
          headerLeft: () => (
            <HeaderIcon
              onPress={() => navigation.toggleDrawer()}
            >
              <Icon
                icon='mobileuigrey15'
              />
            </HeaderIcon>
          ),
          headerTitle: `${ROUTE_PATHS.PORFILE.charAt(0).toUpperCase()}${ROUTE_PATHS.PORFILE.slice(1).toLowerCase()}`,
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
    initialRouteName={ROUTE_PATHS.DASHBOARD.TABS.MAIN}
    lazy
    // tabBar={}
    tabBarOptions={{
      activeBackgroundColor: theme.colors.lightGrey,
      activeTintColor: theme.colors.cherryRed,
      adaptive: true,
      allowFontScaling: true,
      inactiveBackgroundColor: theme.colors.lightGrey,
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
      name={ROUTE_PATHS.DASHBOARD.TABS.MAIN}
    />
    <Tab.Screen
      component={DashboardStack}
      name={ROUTE_PATHS.DASHBOARD.TABS.MOBILE}
    />
    <Tab.Screen
      component={DashboardStack}
      name={ROUTE_PATHS.DASHBOARD.TABS.WEB}
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
        name={ROUTE_PATHS.DASHBOARD.DEFAULT}
      />
      <Drawer.Screen
        component={ProfileStack}
        name={ROUTE_PATHS.PORFILE}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export const AppRouter = () => DrawerRoutes();
