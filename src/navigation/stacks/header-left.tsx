import { DrawerActions } from '@react-navigation/native';
import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import React, { ReactElement } from 'react';
import { HeaderIcon } from '../styled';

export const headerLeft = () : ReactElement => (
  <HeaderIcon
    onPress={() => DrawerActions.toggleDrawer()}
  >
    <Icon
      icon='MobileUiGrey15'
    />
  </HeaderIcon>
);
