/* eslint-disable camelcase */

import { useQuery } from '@apollo/client';
import {
  ActivityIndicator,
  FlatList,
  Spacer,
  Text,
} from '@react-pakistan/react-native-commons-collection';
import { ListRenderItem, SafeAreaView } from 'react-native';
import React, { ReactElement, useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import { GET_LAUNCHES_PAST } from '../../graphql/query';
import { spaceXScreenText } from './helpers';
import { SpacexItem } from './spacex-item';
import { SpacexHeading, SpacexWrapper } from './styled';
import { IMission } from './type';

const renderItem : ListRenderItem<IMission> = (
  {
    item: {
      mission_name,
      details,
      links: {
        video_link,
      },
    },
    index,
  },
) : ReactElement => (
  <SpacexItem
    details={details}
    index={index}
    label={mission_name}
    videoLink={video_link}
  />
);

export const Spacex = () : ReactElement => {
  // theme
  const theme = useTheme();

  // state
  const [offset, setOffset] = useState(10);

  // query
  const { data, loading, refetch } = useQuery(GET_LAUNCHES_PAST, {
    variables: {
      limit: 10,
      offset,
    },
  });

  // callback
  const onRefresh = useCallback(() : void => {
    refetch();
  }, [refetch]);

  const onEndReached = useCallback((info) : void => {
    setOffset(offset + 10);
  }, [offset, setOffset]);

  return (
    <SafeAreaView>
      <SpacexWrapper>
        <SpacexHeading
          {...theme.typography.h2}
          textAlign='center'
        >
          {spaceXScreenText.mainHeading}
        </SpacexHeading>
        <Spacer marginVertical={theme.spacing.small} />
        <FlatList
          data={data?.launchesPast}
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.default,
            paddingVertical: theme.spacing.default,
          }}
          keyExtractor={({ mission_name } : IMission) : string => mission_name}
          onEndReached={onEndReached}
          onEndReachedThreshold={20}
          onRefresh={onRefresh}
          refreshing={loading}
          renderItem={renderItem}
        />
      </SpacexWrapper>
    </SafeAreaView>
  );
};
