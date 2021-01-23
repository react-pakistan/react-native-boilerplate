// ########## Import Dependencies Here ##########
import React, { memo } from 'react';
import { object, string } from 'prop-types';
import { withTheme } from 'styled-components';

// ########## Import Components Here ##########
import { appTheme } from '../../theme';
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
}) => (
  <ListItemWrapper>
    <ListItemBanner
      source={{ uri: banner }}
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

BannerItem.propTypes = {
  banner: string.isRequired,
  description: string.isRequired,
  label: string.isRequired,
  theme: object,
};
BannerItem.defaultProps = {
  theme: appTheme,
};
