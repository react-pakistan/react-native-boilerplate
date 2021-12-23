import { IRNTheme } from '@react-pakistan/util-react-native-functions';
import React, { ReactElement, memo } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { withTheme } from 'styled-components/native';
import { BannerItem } from '../../components/banner-item';
import { dashboardScreenText, openSourceMobileProjects } from './helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  ListHeadingWrapper,
} from './styled';
import { IProject } from './type';

export const DashboardMobile = memo(withTheme(({
  theme,
} : IDashboardMobileProps) : ReactElement => {
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
        data={openSourceMobileProjects}
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

export interface IDashboardMobileProps {
  /**
   *
   */
  theme : IRNTheme;
}
