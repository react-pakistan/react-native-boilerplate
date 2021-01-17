// ########## Import Dependencies Here ##########
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

// ########## Import Components Here ##########
import { DrawerContent } from '../../components/drawer-content';
import { appTheme } from '../../theme';
import { NAVIGATION_ROUTES } from '../navigation-routes';
import { ProfileStack } from '../stacks';
import { MainTab } from '../tabs';

const Drawer = createDrawerNavigator();

export const MainDrawer = () => (
  <NavigationContainer>
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
        activeTintColor: appTheme.colors.cherryRed,
        activeBackgroundColor: appTheme.colors.cherryRed,
        inactiveTintColor: appTheme.colors.cherryRed,
        inactiveBackgroundColor: appTheme.colors.cherryRed,
        itemStyle: {},
        labelStyle: {},
        contentContainerStyle: {},
        style: {},
      }}
      drawerPosition='left'
      drawerStyle={{
        backgroundColor: appTheme.colors.lightGrey,
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
      overlayColor={appTheme.colors.lightBlack}
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
);
