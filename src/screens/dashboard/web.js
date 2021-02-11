// ########## Import Dependencies Here ##########
import { FlatList } from '@react-pakistan/react-native-commons-collection/flat-list';
import { object } from 'prop-types';
import React, { memo } from 'react';
import { withTheme } from 'styled-components';

// ########## Import Components Here ##########
import { BannerItem } from '../../components/banner-item';
import { appTheme } from '../../theme';
import { dashboardScreenText, openSourceWebProjects } from './helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  ListHeadingWrapper,
} from './styled';

export const DashboardWeb = memo(withTheme(({
  theme,
}) => {
  const renderItem = ({ item: { banner, description, label } }) => (
    <BannerItem
      banner={banner}
      description={description}
      label={label}
    />
  );

  return (
    <DashboardWrapper>
      <FlatList
        data={openSourceWebProjects}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={
          <ListHeadingWrapper>
            <DashboardHeading
              {...theme.typography.h1}
            >
              {dashboardScreenText.mainHeading}
            </DashboardHeading>
          </ListHeadingWrapper>
        }
        renderItem={renderItem}
      />
    </DashboardWrapper>
  );
}));

DashboardWeb.propType = {
  theme: object.isRequired,
};
DashboardWeb.defaultProps = {
  theme: appTheme,
};
