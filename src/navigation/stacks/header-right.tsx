/* eslint-disable */

import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { hideApp } from '../../redux/slices/main-slice';
import { HeaderIcon } from '../styled';

export const headerRight = () : ReactElement => {
  // dispatch
  const dispatch = useDispatch();

  return (
    <HeaderIcon
      onPress={() => dispatch(hideApp())}
    >
      <Icon
        icon='MobileUiGrey9'
      />
    </HeaderIcon>
  );
};
