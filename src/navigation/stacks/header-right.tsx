/* eslint-disable */

import { Icon } from '@react-pakistan/react-native-icon-collection/icon';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { hideAppAction } from '../../redux/actions';
import { HeaderIcon } from '../styled';

export const headerRight = () : ReactElement => {
  // dispatch
  const dispatch = useDispatch();

  return (
    <HeaderIcon
      onPress={() : void => dispatch(hideAppAction())}
    >
      <Icon
        icon='MobileUiGrey9'
      />
    </HeaderIcon>
  );
};
