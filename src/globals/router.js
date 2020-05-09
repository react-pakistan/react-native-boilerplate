// ########## Import Dependencies Here ##########
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '@react-pakistan/react-native-commons-collection/theme';
import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import { shape, func } from 'prop-types';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';

// ########## Import Screens Here ##########
import { Dashboard as DashboardScreen } from '../screens/dashboard';
import { Profile as ProfileScreen } from '../screens/profile';

// ########## Import Components Here ##########
import { DrawerContent } from '../components/drawer-content';
import * as actions from '../screens/main-screen/actions';
import { headerStyles } from './styles';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DashboardStack = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Dashboard'
        component={DashboardScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(actions.hideAppAction())}
              style={headerStyles.iconRight}
            >
              <Icon
                icon='mobileuigrey9'
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={headerStyles.iconLeft}
            >
              <Icon
                icon='mobileuigrey15'
              />
            </TouchableOpacity>
          ),
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
        name='Profile'
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(actions.hideAppAction())}
              style={headerStyles.iconRight}
            >
              <Icon
                icon='mobileuigrey9'
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={headerStyles.iconLeft}
            >
              <Icon
                icon='mobileuigrey15'
              />
            </TouchableOpacity>
          ),
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
      <Drawer.Screen name='Dashboard' component={DashboardStack} />
      <Drawer.Screen name='Profile' component={ProfileStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export const AppRouter = () => DrawerRoutes();
