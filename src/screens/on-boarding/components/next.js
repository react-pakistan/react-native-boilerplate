// ########## Import Dependencies Here ##########
import { Text, TouchableOpacity } from '@react-pakistan/react-native-commons-collection';
import { bool, string } from 'prop-types';
import React from 'react';

const backgroundColor = (isLight) => (isLight ? 'black' : 'white');
const color = (isLight) => backgroundColor(!isLight);

export const Next = ({
  isLight,
  nextLabel,
  ...rest
}) => (
  <TouchableOpacity
    testID='onboarding-next-button'
    title={'Next'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      backgroundColor: backgroundColor(isLight),
    }}
    textStyle={{
      color: color(isLight),
    }}
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

Next.propTypes = {
  isLight: bool.isRequired,
  nextLabel: string.isRequired,
};
