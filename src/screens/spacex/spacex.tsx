/* eslint-disable camelcase */

import { useQuery } from '@apollo/client';
import {
  FlatList,
  Spacer,
} from '@react-pakistan/react-native-commons-collection';
import { IRNTheme } from '@react-pakistan/util-react-native-functions';
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

const itemSeparator = (theme : IRNTheme) : ReactElement => <Spacer marginVertical={theme.spacing.small} />;

export const Spacex = () : ReactElement => {
  // theme
  const theme = useTheme();

  // state
  const [offset] = useState(10);

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

  // const onEndReached = useCallback(() : void => {
  //   setOffset(offset + 10);
  // }, [offset, setOffset]);

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
          ItemSeparatorComponent={() : ReactElement => itemSeparator(theme)}
          data={data?.launchesPast}
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.default,
            paddingVertical: theme.spacing.default,
          }}
          keyExtractor={({ mission_name } : IMission) : string => mission_name}
          // onEndReached={onEndReached}
          onEndReachedThreshold={2}
          onRefresh={onRefresh}
          refreshing={loading}
          renderItem={renderItem}
        />
      </SpacexWrapper>
    </SafeAreaView>
  );
};
