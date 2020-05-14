// ########## Import Dependencies Here ##########
import { FlatList } from '@react-pakistan/react-native-commons-collection/flat-list';
import React from 'react';

// ########## Import Components Here ##########
import { dashboardScreenText, openSourceMainProjects } from './helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  LabelText,
  ListHeadingWrapper,
  ListItemBanner,
  ListItemWrapper,
} from './styled';

export const Dashboard = () => (
  <DashboardWrapper>
    <FlatList
      keyExtractor={({ id }) => id}
      data={openSourceMainProjects}
      ListHeaderComponent={
        <ListHeadingWrapper>
          <DashboardHeading>{dashboardScreenText.mainHeading}</DashboardHeading>
        </ListHeadingWrapper>
      }
      renderItem={({ item: { banner, description, label } }) => (
        <ListItemWrapper>
          <ListItemBanner
            source={{ uri: banner }}
          />
          <LabelText>{label}</LabelText>
          <LabelText>{description}</LabelText>
        </ListItemWrapper>
      )}
    />
  </DashboardWrapper>
);
