// ########## Import Dependencies Here ##########
import { FlatList } from '@react-pakistan/react-native-commons-collection/flat-list';
import React from 'react';

// ########## Import Components Here ##########
import { dashboardScreenText, openSourceMobileProjects } from '../helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  LabelText,
  ListItemBanner,
  ListItemWrapper,
} from '../styled';

export const DashboardMobile = () => (
  <DashboardWrapper>
    <DashboardHeading>{dashboardScreenText.mainHeading}</DashboardHeading>
    <FlatList
      data={openSourceMobileProjects}
      keyExtractor={({ id }) => id}
      renderItem={({ item: { banner, label } }) => (
        <ListItemWrapper>
          <ListItemBanner
            source={{ uri: banner }}
          />
          <LabelText>{label}</LabelText>
        </ListItemWrapper>
      )}
    />
  </DashboardWrapper>
);
