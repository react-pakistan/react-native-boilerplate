import { Text, TouchableOpacity } from '@react-pakistan/react-native-commons-collection';
import React, { ReactElement } from 'react';
import { NextButtonProps } from 'react-native-onboarding-swiper';

const backgroundColor = (isLight : boolean) : string => (isLight ? 'black' : 'white');
const color = (isLight : boolean) : string => backgroundColor(!isLight);

export const Next = ({
  isLight,
  nextLabel,
  ...rest
} : NextButtonProps) : ReactElement => (
  <TouchableOpacity
    testID='onboarding-next-button'
    // title={'Next'}
    // buttonStyle={{
    //   backgroundColor: backgroundColor(isLight),
    // }}
    // containerViewStyle={{
    //   marginVertical: 10,
    //   backgroundColor: backgroundColor(isLight),
    // }}
    // textStyle={{
    //   color: color(isLight),
    // }}
    {...rest}
  >
    <Text
      style={{
        color: color(isLight),
        fontSize: 16,
        padding: 16,
      }}
    >
      {nextLabel}
    </Text>
  </TouchableOpacity>
);
