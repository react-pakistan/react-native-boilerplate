// ########## Import Dependencies Here ##########
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

// ########## Import Containers Here ##########
import Dashboard from '../containers/Dashboard';
import Profile from '../containers/Profile';

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
  },
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
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
