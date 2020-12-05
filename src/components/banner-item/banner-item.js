import React, { memo } from 'react';
import { string } from 'prop-types';
import {
  LabelHeading,
  LabelText,
  ListItemBanner,
  ListItemWrapper,
  TextWrapper,
} from './styled';

export const BannerItem = memo(({
  banner,
  description,
  label,
}) => (
  <ListItemWrapper>
    <ListItemBanner
      source={{ uri: banner }}
    />
    <TextWrapper>
      <LabelHeading>{label}</LabelHeading>
      <LabelText>{description}</LabelText>
    </TextWrapper>
  </ListItemWrapper>
));

BannerItem.propTypes = {
  banner: string.isRequired,
  description: string.isRequired,
  label: string.isRequired,
};
BannerItem.defaultProps = {};
