import { FlatList } from '@taimoormk/react-native-commons-collection/flat-list';
import { Image } from '@taimoormk/react-native-commons-collection/image';
import { Text } from '@taimoormk/react-native-commons-collection/text';
// import { TextInput } from '@taimoormk/react-native-commons-collection/text-input';
import { View } from '@taimoormk/react-native-commons-collection/view';
import React from 'react';
// import { Button } from 'react-native-paper';
// import { STYLE_CONSTANTS } from '../../globals/styles';
import { openSourceProjects } from './helpers';
import { styles } from './styles';

export const Dashboard = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>React Pakistan Open Source Projects</Text>
    <FlatList
      data={openSourceProjects}
      keyExtractor={({ id }) => id}
      renderItem={({ item: { banner, label } }) => (
        <View
          style={styles.listItemWrapper}
        >
          <Image
            source={{ uri: banner }}
            style={styles.listItemBanner}
          />
          <Text>{label}</Text>
        </View>
      )}
    />
  </View>
);
