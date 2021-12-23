import { IRNTheme } from '@react-pakistan/util-react-native-functions';
import React, { ReactElement, memo } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { withTheme } from 'styled-components/native';
import { BannerItem } from '../../components/banner-item';
import { dashboardScreenText, openSourceMainProjects } from './helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  ListHeadingWrapper,
} from './styled';
import { IProject } from './type';

export const Dashboard = memo(withTheme(({
  theme,
} : IDashboardProps) : ReactElement => {
  const renderItem : ListRenderItem<IProject> = ({ item: { banner, description, label } }) : ReactElement => (
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
        keyExtractor={({ id } : IProject) : string => id}
        ListHeaderComponent={(
          <ListHeadingWrapper>
            <DashboardHeading
              {...theme.typography.h1}
            >
              {dashboardScreenText.mainHeading}
            </DashboardHeading>
          </ListHeadingWrapper>
        )}
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
