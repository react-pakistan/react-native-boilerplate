import { Spacer, Text } from '@react-pakistan/react-native-commons-collection';
import React, { ReactElement } from 'react';
import { useTheme } from 'styled-components';
import { SpacexItemWrapper } from './styled';
import { ISpacexItemProps } from './type';

export const SpacexItem = ({
  details,
  index,
  label,
  videoLink,
} : ISpacexItemProps) : ReactElement => {
  // theme
  const theme = useTheme();

  return (
    <SpacexItemWrapper>
      <Text
        {...theme.typography.p3}
      >
        {index + 1}
        -
        {label}
      </Text>
      <Spacer marginVertical={theme.spacing.small} />
      <Text>{details}</Text>
    </SpacexItemWrapper>
  );
};
