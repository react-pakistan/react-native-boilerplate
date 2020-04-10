// ########## Import Dependencies Here ##########
import React from 'react';
import { func } from 'prop-types';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-paper';

// ########## Import Components Here ##########
import { STYLE_CONSTANTS } from '../../globals/styles';
import { styles } from './styles';
import { loginScreenText } from './helpers';

export const SignIn = ({
  showAppAction,
}) => {
  // dispatch
  const dispatch = useDispatch();

  return (
    <View style={styles.signInContainer}>
      <Text style={styles.oAuthHeading}>
        {loginScreenText.oAuthHeading}
      </Text>
      <View style={styles.spacer} />
      <Button
        icon={require('../../assets/images/facebook.png')}
        mode="contained"
        color={STYLE_CONSTANTS.COLORS.FACEBOOK}
        style={styles.facebookButton}
        onPress={() => dispatch(showAppAction())}
      >
        {loginScreenText.facebookButton}
      </Button>
      <View style={styles.spacer} />
      <Button
        icon={require('../../assets/images/google.png')}
        mode="contained"
        color={STYLE_CONSTANTS.COLORS.GOOGLE}
        style={styles.googleButton}
        onPress={() => dispatch(showAppAction())}
      >
        {loginScreenText.googleButton}
      </Button>
    </View>
  );
};

SignIn.propTypes = {
  showAppAction: func,
};
