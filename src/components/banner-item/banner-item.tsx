import React, { ReactElement, memo } from 'react';
import { IRNTheme, width } from '@react-pakistan/util-react-native-functions';
import { withTheme } from 'styled-components/native';
import {
  LabelHeading,
  LabelText,
  ListItemBanner,
  ListItemWrapper,
  TextWrapper,
} from './styled';

export const BannerItem = memo(withTheme(({
  banner,
  description,
  label,
  theme,
} : IBannerItemProps) : ReactElement => (
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
        {...theme.typography.text}
        color={theme.misc.darkMode ? theme.colors.white : theme.colors.black}
      >
        {description}
      </LabelText>
    </TextWrapper>
  </ListItemWrapper>
)));

export interface IBannerItemProps {
  /**
   *
   */
  banner : string;
  /**
   *
   */
  description : string;
  /**
   *
   */
  label : string;
  /**
   *
   */
  theme : IRNTheme;
}
