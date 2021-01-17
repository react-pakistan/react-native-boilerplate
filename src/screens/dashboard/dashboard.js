// ########## Import Dependencies Here ##########
import { FlatList } from '@react-pakistan/react-native-commons-collection';
import React, { memo } from 'react';
import { withTheme } from 'styled-components';

// ########## Import Components Here ##########
import { BannerItem } from '../../components/banner-item';
import { dashboardScreenText, openSourceMainProjects } from './helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  ListHeadingWrapper,
} from './styled';

export const Dashboard = memo(withTheme(() => {
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
            <DashboardHeading>
              {dashboardScreenText.mainHeading}
            </DashboardHeading>
          </ListHeadingWrapper>
        }
        renderItem={renderItem}
      />
    </DashboardWrapper>
  );
}));

Dashboard.propType = {};
Dashboard.defaultProps = {};
