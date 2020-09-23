// ########## Import Dependencies Here ##########
import { FlatList } from '@react-pakistan/react-native-commons-collection/flat-list';
import React from 'react';

// ########## Import Components Here ##########
import { BannerItem } from './banner-item';
import { dashboardScreenText, openSourceWebProjects } from './helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  ListHeadingWrapper,
} from './styled';

export const DashboardWeb = () => {
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
            <DashboardHeading>{dashboardScreenText.mainHeading}</DashboardHeading>
          </ListHeadingWrapper>
        }
        renderItem={renderItem}
      />
    </DashboardWrapper>
  );
};
