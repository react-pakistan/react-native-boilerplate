/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import { StyleSheet } from "react-native";

import { STYLE_CONSTANTS, width } from "../../config/styles";

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: STYLE_CONSTANTS.COLORS.GRAY,
  },
  oAuthContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  oAuthHeading: STYLE_CONSTANTS.H1,
  facebookButton: STYLE_CONSTANTS.BUTTON_TITLE,
  facebookButton: {
    width: width - 50,
    borderRadius: 7,
    padding: 10
  },
  googleButton: STYLE_CONSTANTS.BUTTON_TITLE,
  googleButton: {
    width: width - 50,
    borderRadius: 7,
    padding: 10
  },
  siginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  formInput: {
    width: width - 50,
    borderRadius: 7
  },
  spacer: STYLE_CONSTANTS.SPACER
});

export default styles;
