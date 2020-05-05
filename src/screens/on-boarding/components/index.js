import React from 'react';
import { bool, string } from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const backgroundColor = (isLight) => (isLight ? 'black' : 'white');
const color = (isLight) => backgroundColor(!isLight);

export const Skip = ({
  isLight,
  skipLabel,
  ...rest
}) => (
    <TouchableOpacity
      title={'Skip'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70,
      }}
      textStyle={{ color: color(isLight) }}
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

Skip.propTypes = {
  isLight: bool.isRequired,
  skipLabel: string.isRequired,
};

export const Next = ({
  isLight,
  nextLabel,
  ...rest
}) => (
  <TouchableOpacity
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