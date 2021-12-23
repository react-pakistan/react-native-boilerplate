import { FlatList, Text, TouchableOpacity } from '@react-pakistan/react-native-commons-collection';
import { IRNTheme, width } from '@react-pakistan/util-react-native-functions';
import React, { ReactElement, memo } from 'react';
import { ListRenderItem } from 'react-native';
import { withTheme } from 'styled-components/native';
import { DrawerContentWrapper, DrawerContentHeader, DrawerBanner } from './styled';

export const DrawerContent = memo(withTheme(({
  banner,
  descriptors,
  navigation,
  theme,
} : IDrawerContentProps) : ReactElement => {
  const renderItem : ListRenderItem<string> = ({ item, index }) : ReactElement => (
    <TouchableOpacity
      onPress={() : void => navigation.navigate(Object.keys(descriptors)[index].split('-')[0])}
    >
      <Text {...theme.typography.text}>
        {item.split('_')[1].charAt(0).toUpperCase() + item.split('_')[1].slice(1).toLowerCase().split('-')[0]}
      </Text>
    </TouchableOpacity>
  );

  return (
    <DrawerContentWrapper>
      <DrawerContentHeader>
        <DrawerBanner
          height={80}
          resizeMode='contain'
          source={{
            uri: banner,
          }}
          width={width}
        />
      </DrawerContentHeader>
      <FlatList
        data={Object.keys(descriptors)}
        renderItem={renderItem}
      />
    </DrawerContentWrapper>
  );
}));

export interface IDrawerContentProps {
  /**
   *
   */
  banner : string;
  /**
   *
   */
  descriptors : Record<string, unknown>;
  /**
   *
   */
  navigation : {
    /**
     *
     */
    navigate : (s : string) => void;
  };
  /**
   *
   */
  theme : IRNTheme;
}
