/* eslint-disable camelcase */

import { useQuery } from '@apollo/client';
import {
  ActivityIndicator,
  FlatList,
  Spacer,
  Text,
} from '@react-pakistan/react-native-commons-collection';
import { ListRenderItem, SafeAreaView } from 'react-native';
import React, { ReactElement, useCallback } from 'react';
import { useTheme } from 'styled-components';
import { GET_LAUNCHES_PAST } from '../../graphql/query';
import { spaceXScreenText } from './helpers';
import { SpacexHeading, SpacexWrapper } from './styled';
import { IMission } from './type';

const renderItem : ListRenderItem<IMission> = (
  {
    item: {
      mission_name,
    },
  },
) : ReactElement => (
  <Text>
    {mission_name}
  </Text>
);

export const Spacex = () : ReactElement => {
  // theme
  const theme = useTheme();

  // query
  const { data, loading, refetch } = useQuery(GET_LAUNCHES_PAST, {
    variables: {
      limit: 5,
    },
  });

  // callback
  const onRefresh = useCallback(() : void => {
    refetch();
  }, [refetch]);

  return (
    <SafeAreaView>
      <SpacexWrapper>
        <SpacexHeading
          {...theme.typography.h2}
        >
          {spaceXScreenText.mainHeading}
        </SpacexHeading>
        <Spacer marginVertical={theme.spacing.small} />
        {loading && <ActivityIndicator />}
        <FlatList
          data={data?.launchesPast}
          keyExtractor={({ mission_name }) => mission_name}
          onRefresh={onRefresh}
          refreshing={loading}
          renderItem={renderItem}
        />
      </SpacexWrapper>
    </SafeAreaView>
  );
};
