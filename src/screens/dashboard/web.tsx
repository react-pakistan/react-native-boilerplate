import React, { ReactElement } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useTheme } from 'styled-components/native';
import { BannerItem } from '../../components/banner-item';
import { dashboardScreenText, openSourceWebProjects } from './helpers';
import {
  DashboardHeading,
  DashboardWrapper,
  ListHeadingWrapper,
} from './styled';
import { IProject } from './type';

const renderItem : ListRenderItem<IProject> = (
  {
    item: {
      banner,
      description,
      label,
    },
  },
) : ReactElement => (
  <BannerItem
    banner={banner}
    description={description}
    label={label}
  />
);

export const DashboardWeb = () : ReactElement => {
  // theme
  const theme = useTheme();

  return (
    <DashboardWrapper>
      <FlatList
        data={openSourceWebProjects}
        keyExtractor={({ id } : IProject) : string => id}
        ListHeaderComponent={(
          <ListHeadingWrapper>
            <DashboardHeading
              {...theme.typography.h1}
              textAlign='center'
            >
              {dashboardScreenText.mainHeading}
            </DashboardHeading>
          </ListHeadingWrapper>
        )}
        renderItem={renderItem}
      />
    </DashboardWrapper>
  );
};
