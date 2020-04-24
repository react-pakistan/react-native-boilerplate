// ########## Import Dependencies Here ##########
import { StyleSheet } from 'react-native';

import { STYLE_CONSTANTS } from '../../globals/styles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  heading: STYLE_CONSTANTS.H1,
  subHeading: STYLE_CONSTANTS.H2,
  buttonTitle: STYLE_CONSTANTS.BUTTON_TITLE,
});
