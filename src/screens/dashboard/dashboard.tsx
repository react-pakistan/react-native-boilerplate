import { IRNTheme } from '@react-pakistan/util-react-native-functions';
import React, { ReactElement, memo } from 'react';
import { FlatList } from 'react-native';
import { withTheme } from 'styled-components/native';
import { BannerItem } from '../../components/banner-item';
import { dashboardScreenText, openSourceMainProjects } from './helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  ListHeadingWrapper,
} from './styled';

export const Dashboard = memo(withTheme(({
  theme,
} : IDashboardProps) : ReactElement => {
  const renderItem = ({ item: { banner, description, label } } : any) : ReactElement => (
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
        keyExtractor={({ id } : any) : string => id}
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

export interface IDashboardProps {
  /**
   *
   */
  theme : IRNTheme;
}
