// ########## Import Dependencies Here ##########
import { FlatList } from '@react-pakistan/react-native-commons-collection';
import React from 'react';

// ########## Import Components Here ##########
import { BannerItem } from './banner-item';
import { dashboardScreenText, openSourceMainProjects } from './helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  ListHeadingWrapper,
} from './styled';

export const Dashboard = () => {
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
        data={openSourceMainProjects}
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
