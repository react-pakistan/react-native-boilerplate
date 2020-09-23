// ########## Import Dependencies Here ##########
import { FlatList } from '@react-pakistan/react-native-commons-collection/flat-list';
import React from 'react';

// ########## Import Components Here ##########
import { BannerItem } from './banner-item';
import { dashboardScreenText, openSourceMobileProjects } from './helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  ListHeadingWrapper,
} from './styled';

export const DashboardMobile = () => {
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
        data={openSourceMobileProjects}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={
          <ListHeadingWrapper>
            <DashboardHeading>{dashboardScreenText.mainHeading}</DashboardHeading>
          </ListHeadingWrapper>
        }
        renderItem={renderItem}
      />
    </DashboardWrapper>
  );
};
