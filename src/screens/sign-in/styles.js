// ########## Import Dependencies Here ##########
import { StyleSheet } from 'react-native';

import { STYLE_CONSTANTS, width } from '../../globals/styles';

export const styles = StyleSheet.create({
  signInContainer: {
    alignItems: 'center',
    backgroundColor: STYLE_CONSTANTS.COLORS.GRAY,
    flex: 1,
    justifyContent: 'center',
  },
  oAuthContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  oAuthHeading: STYLE_CONSTANTS.H1,
  facebookButton: {
    ...STYLE_CONSTANTS.BUTTON_TITLE,
    borderRadius: 7,
    padding: 10,
    width: width - 50,
  },
  googleButton: {
    ...STYLE_CONSTANTS.BUTTON_TITLE,
    borderRadius: 7,
    padding: 10,
    width: width - 50,
  },
  siginContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  formInput: {
    borderRadius: 7,
    width: width - 50,
  },
  spacer: STYLE_CONSTANTS.SPACER,
});
