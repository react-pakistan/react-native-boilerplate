/* eslint-disable camelcase */

import { useQuery } from '@apollo/client';
import { ActivityIndicator, Text, FlatList } from '@react-pakistan/react-native-commons-collection';
import { ListRenderItem, SafeAreaView } from 'react-native';
import React, { ReactElement, memo, useCallback } from 'react';
import { useTheme } from 'styled-components';
import { GET_LAUNCHES_PAST } from '../../graphql/query';
import { profileScreenText } from './helpers';
import { ProfileHeading, ProfileWrapper } from './styled';
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

export const Profile = () : ReactElement => {
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
      <ProfileWrapper>
        <ProfileHeading
          {...theme.typography.h2}
        >
          {profileScreenText.mainHeading}
        </ProfileHeading>
        {loading && <ActivityIndicator />}
        <FlatList
          data={data?.launchesPast}
          keyExtractor={({ mission_name }) => mission_name}
          onRefresh={onRefresh}
          refreshing={loading}
          renderItem={renderItem}
        />
      </ProfileWrapper>
    </SafeAreaView>
  );
};
