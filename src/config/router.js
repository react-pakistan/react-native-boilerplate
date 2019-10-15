// ########## Import Dependencies Here ##########
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

// ########## Import Containers Here ##########
import Dashboard from '../containers/Dashboard';
import Profile from '../containers/Profile';
import { STYLE_CONSTANTS } from './styles';

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerStyle: {
        backgroundColor: STYLE_CONSTANTS.COLORS.GRAY,
      },
      headerTintColor: STYLE_CONSTANTS.COLORS.LIGHT_BLUE,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon
            name="bars"
            type="font-awesome"
            size={25}
            color={'#666699'}
            margin={15}
          />
        </TouchableOpacity>
      ),
    }),
  },
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerStyle: {
        backgroundColor: STYLE_CONSTANTS.COLORS.GRAY,
      },
      headerTintColor: STYLE_CONSTANTS.COLORS.LIGHT_BLUE,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon
            name="bars"
            type="font-awesome"
            size={25}
            color={'#666699'}
            margin={15}
          />
        </TouchableOpacity>
      ),
    }),
  },
});

const AppDrawer = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStack,
  },
  Profile: {
    screen: ProfileStack,
  },
});

const AppContainer = createAppContainer(AppDrawer);

export default AppContainer;
