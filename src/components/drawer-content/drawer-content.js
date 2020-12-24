// ########## Import Dependencies Here ##########
import { FlatList, Text, TouchableOpacity } from '@react-pakistan/react-native-commons-collection';
import {
  func,
  object,
  shape,
  string,
} from 'prop-types';
import React, { memo } from 'react';
import { withTheme } from 'styled-components';

// ########## Import Components Here ##########
import { appTheme } from '../../theme';
import { DrawerContentWrapper, DrawerContentHeader, DrawerBanner } from './styled';

export const DrawerContent = memo(withTheme(({
  banner,
  descriptors,
  navigation,
  theme,
}) => {
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(Object.keys(descriptors)[index].split('-')[0])}
    >
      <Text {...theme.typography.text}>
        {(item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).split('-')[0]}
      </Text>
    </TouchableOpacity>
  );

  return (
    <DrawerContentWrapper>
      <DrawerContentHeader>
        <DrawerBanner
          resizeMode='contain'
          source={{
            uri: banner,
          }}
        />
      </DrawerContentHeader>
      <FlatList
        data={Object.keys(descriptors)}
        keyExtractor={(item) => item}
        renderItem={renderItem}
      />
    </DrawerContentWrapper>
  );
}));

DrawerContent.propTypes = {
  banner: string.isRequired,
  descriptors: object.isRequired,
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
  theme: object,
};
DrawerContent.defaultProps = {
  theme: appTheme,
};
