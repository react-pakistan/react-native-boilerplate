import React, { ReactElement, memo } from 'react';
import { width } from '@react-pakistan/util-react-native-functions';
import { useTheme } from 'styled-components/native';
import {
  LabelHeading,
  LabelText,
  ListItemBanner,
  ListItemWrapper,
  TextWrapper,
} from './styled';
import { IBannerItemProps } from './type';

export const BannerItem = memo(({
  banner,
  description,
  label,
} : IBannerItemProps) : ReactElement => {
  // theme
  const theme = useTheme();

  return (
    <ListItemWrapper>
      <ListItemBanner
        height={theme.spacing.huge * 4}
        source={{ uri: banner }}
        width={width}
      />
      <TextWrapper>
        <LabelHeading
          {...theme.typography.h2}
          color={theme.misc.darkMode ? theme.colors.white : theme.colors.black}
        >
          {label}
        </LabelHeading>
        <LabelText
          {...theme.typography.p2}
          color={theme.misc.darkMode ? theme.colors.white : theme.colors.black}
        >
          {description}
        </LabelText>
      </TextWrapper>
    </ListItemWrapper>
  );
});
