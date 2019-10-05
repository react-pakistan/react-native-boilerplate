// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from 'react';
import {} from 'prop-types';
import { View, Text } from 'react-native';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import styles from './styles';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <Text style={styles.heading}>Dashboard</Text>
        </View>
      </Fragment>
    );
  }
}

export default Dashboard;
