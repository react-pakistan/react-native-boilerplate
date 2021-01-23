// ########## Import Dependencies Here ##########
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { object } from 'prop-types';
import React, { memo } from 'react';
import { withTheme } from 'styled-components';

// ########## Import Components Here ##########
import { DrawerContent } from '../../components/drawer-content';
import { appTheme } from '../../theme';
import { NAVIGATION_ROUTES } from '../navigation-routes';
import { ProfileStack } from '../stacks';
import { MainTab } from '../tabs';

const Drawer = createDrawerNavigator();

export const MainDrawer = memo(withTheme(({
  theme,
}) => (
  <NavigationContainer
    theme={theme.misc.darkMode ? DarkTheme : DefaultTheme}
  >
    <Drawer.Navigator
      backBehavior='initialRoute'
      drawerContent={({
        descriptors,
        navigation,
        progress,
        state,
      }) => (
        <DrawerContent
          banner=
            'https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg'
          descriptors={descriptors}
          navigation={navigation}
          progress={progress}
          state={state}
        />
      )}
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
        component={MainTab}
        name={NAVIGATION_ROUTES.DRAWER_DASHBOARD}
      />
      <Drawer.Screen
        component={ProfileStack}
        name={NAVIGATION_ROUTES.DRAWER_PROFILE}
      />
    </Drawer.Navigator>
  </NavigationContainer>
)));

MainDrawer.propTypes = {
  theme: object,
};
MainDrawer.defaultProps = {
  theme: appTheme,
};
