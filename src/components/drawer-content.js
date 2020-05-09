// ########## Import Dependencies Here ##########
import { FlatList } from '@react-pakistan/react-native-commons-collection/flat-list';
import { Text } from '@react-pakistan/react-native-commons-collection/text';
import { func, object, shape } from 'prop-types';
import React from 'react';

// ########## Import Components Here ##########
import { DrawerContentWrapper, DrawerContentHeader, DrawerBanner } from './styled';

export const DrawerContent = ({
  navigation,
  descriptors,
}) => (
  <DrawerContentWrapper>
    <DrawerContentHeader>
      <DrawerBanner
        loadingIndicatorSource
        source={{ uri: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg' }}
        resizeMode='contain'
      />
    </DrawerContentHeader>
    <FlatList
      data={Object.keys(descriptors)}
      renderItem={({ item, index }) => (
        <Text
          key={item}
          onPress={() => navigation.navigate(Object.keys(descriptors)[index].split('-')[0])}
        >
          {(item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).split('-')[0]}
        </Text>
      )}
      keyExtractor={({ id }) => id}
    />
  </DrawerContentWrapper>
);

DrawerContent.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
  descriptors: object.isRequired,
};
