// ########## Import Dependencies Here ##########
import { FlatList } from '@react-pakistan/react-native-commons-collection/flat-list';
import React from 'react';

// ########## Import Components Here ##########
import { dashboardScreenText, openSourceMobileProjects } from '../helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  LabelText,
  ListHeadingWrapper,
  ListItemBanner,
  ListItemWrapper,
  TextWrapper,
} from '../styled';

export const DashboardMobile = () => (
  <DashboardWrapper>
    <FlatList
      data={openSourceMobileProjects}
      keyExtractor={({ id }) => id}
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
          <TextWrapper>
            <LabelText>{label}</LabelText>
            <LabelText>{description}</LabelText>
          </TextWrapper>
        </ListItemWrapper>
      )}
    />
  </DashboardWrapper>
);
