/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import React, { Component, Fragment } from "react";
import { func } from 'prop-types';
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

// ########## Import Components Here ##########
import { STYLE_CONSTANTS } from "../../config/styles";
import styles from "./styles";
import { loginScreenText } from "./helpers";

class SignIn extends Component {
  state = {
    isLoading: false
  };

  render() {
    const { isLoading } = this.state;
    const { showAppAction } = this.props;
    return (
      <Fragment>
        <View style={styles.signInContainer}>
          <Text style={styles.oAuthHeading}>
            {loginScreenText.oAuthHeading}
          </Text>
          <View style={styles.spacer} />
          <Button
            icon={require("../../assets/images/facebook.png")}
            mode="contained"
            loading={isLoading}
            color={STYLE_CONSTANTS.COLORS.FACEBOOK}
            style={styles.facebookButton}
            onPress={() => showAppAction()}
          >
            {loginScreenText.facebookButton}
          </Button>
          <View style={styles.spacer} />
          <Button
            icon={require("../../assets/images/google.png")}
            mode="contained"
            loading={isLoading}
            color={STYLE_CONSTANTS.COLORS.GOOGLE}
            style={styles.googleButton}
            onPress={() => showAppAction()}
          >
            {loginScreenText.googleButton}
          </Button>
        </View>
      </Fragment>
    );
  }
}

SignIn.propTypes = {
  showAppAction: func
};

export default SignIn;
