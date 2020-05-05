// ########## Import Dependencies Here ##########
import { StyleSheet } from 'react-native';
import { width, STYLE_CONSTANTS } from '../../globals/styles';


export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemWrapper: {
    width,
  },
  listItemBanner: {
    width,
    height: 200,
  },
  buttonTitle: STYLE_CONSTANTS.BUTTON_TITLE,
  heading: STYLE_CONSTANTS.H1,
  subHeading: STYLE_CONSTANTS.H2,
});
