import { Text, TouchableOpacity } from '@react-pakistan/react-native-commons-collection';
import React, { ReactElement } from 'react';
import { SkipButtonProps } from 'react-native-onboarding-swiper';

const backgroundColor = (isLight : boolean) : string => (isLight ? 'black' : 'white');
const color = (isLight : boolean) : string => backgroundColor(!isLight);

export const Skip = ({
  isLight,
  skipLabel,
  ...rest
} : SkipButtonProps) : ReactElement => (
    <TouchableOpacity
      testID='onboarding-skip-button'
      // title={'Skip'}
      // buttonStyle={{
      //   backgroundColor: backgroundColor(isLight),
      // }}
      // containerViewStyle={{
      //   marginVertical: 10,
      //   width: 70,
      // }}
      // textStyle={{ color: color(isLight) }}
      {...rest}
    >
      <Text
        style={{
          color: color(isLight),
          fontSize: 16,
          padding: 16,
        }}
      >
        {skipLabel}
      </Text>
    </TouchableOpacity>
);
