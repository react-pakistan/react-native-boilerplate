/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import { StyleSheet } from "react-native";

import { STYLE_CONSTANTS, width } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  textWrapper: {
    flex: 1,
  },
  headering: STYLE_CONSTANTS.HEADER,
  form: {
    flex: 7,
    width: width - 50,
  },
  input: {
    color: STYLE_CONSTANTS.COLORS.SECONDARY,
    marginBottom: STYLE_CONSTANTS.SPACER.marginBottom,
  },
  userDataContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: STYLE_CONSTANTS.SPACER.marginTop,
    marginBottom: STYLE_CONSTANTS.SPACER.marginBottom,
  },
  avatarContainer: {
    flex: 1,    
  },
  userAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userContainer: {
    flex: 3
  },
  userData: STYLE_CONSTANTS.H1,
  userData: {
    textAlign: 'right',
  }
});

export default styles;
