/* eslint-disable camelcase */

import { useQuery } from '@apollo/client';
import { ActivityIndicator, Text, FlatList } from '@react-pakistan/react-native-commons-collection';
import { ListRenderItem, SafeAreaView } from 'react-native';
import React, { ReactElement, memo } from 'react';
import { useTheme } from 'styled-components/native';
import { GET_USER_BY_USERNAME } from '../../graphql/query';
import { profileScreenText } from './helpers';
import { ProfileHeading, ProfileWrapper } from './styled';
import { IMission } from './type';

const renderItem : ListRenderItem<IMission> = ({ item: { mission_name } }) : ReactElement => (
  <Text>
    {mission_name}
  </Text>
);

export const Profile = memo(() : ReactElement => {
  // dispatch
  const { data, loading } = useQuery(GET_USER_BY_USERNAME, {
    variables: {
      limit: 5,
    },
  });

  // theme
  const theme = useTheme();

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
          renderItem={renderItem}
        />
      </ProfileWrapper>
    </SafeAreaView>
  );
});
