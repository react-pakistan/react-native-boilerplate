// ########## Import Dependencies Here ##########
import { FlatList } from '@react-pakistan/react-native-commons-collection/flat-list';
import React from 'react';

// ########## Import Components Here ##########
import { dashboardScreenText, openSourceWebProjects } from '../helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  LabelText,
  ListItemBanner,
  ListItemWrapper,
} from '../styled';

export const DashboardWeb = () => (
  <DashboardWrapper>
    <DashboardHeading>{dashboardScreenText.mainHeading}</DashboardHeading>
    <FlatList
      data={openSourceWebProjects}
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
