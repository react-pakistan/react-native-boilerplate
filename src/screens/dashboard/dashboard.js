import React from 'react';
import { View, Text } from 'react-native';
import { Switch } from '@taimoormk/react-native-commons-collection/switch';
import { styles } from './styles';

export const Dashboard = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Dashboard</Text>
    <Switch />
  </View>
);
