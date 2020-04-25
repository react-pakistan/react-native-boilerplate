import { Image } from '@taimoormk/react-native-commons-collection/image';
import { Text } from '@taimoormk/react-native-commons-collection/text';
import { TextInput } from '@taimoormk/react-native-commons-collection/text-input';
import { View } from '@taimoormk/react-native-commons-collection/view';
import React from 'react';
import { Button } from 'react-native-paper';
import { styles } from './styles';
import { STYLE_CONSTANTS } from '../../globals/styles';

export const Dashboard = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Dashboard</Text>
    <TextInput />
    <Button
      mode="contained"
      color={STYLE_CONSTANTS.COLORS.FACEBOOK}
      style={styles.facebookButton}
    >
        Hello
      </Button>
    <Image source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }} />
    <Text style={styles.subHeading}>Hello</Text>
  </View>
);
