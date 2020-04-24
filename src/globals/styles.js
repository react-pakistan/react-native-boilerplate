// ########## Import Dependencies Here ##########
import { Dimensions, StyleSheet } from 'react-native';

export const { width, height } = Dimensions.get('window');

// ########## Declare Global Style Constants Here ##########
export const STYLE_CONSTANTS = {
  COLORS: {
    BLACK: '#000000',
    DARK_GRAY: '#707070',
    DARK_RED: '#8B0000',
    FACEBOOK: '#4267B2',
    GOOGLE: '#4285F4',
    GRAY: '#CCCCCC',
    LIGHT_BLUE: '#8EBADB',
    PRIMARY: '#396355',
    SECONDARY: '#1B75BC',
    WHITE: '#FFFFFF',
    YELLOW: '#FDB92C',
  },
  FONT: {
    FONTFAMILY_BOLD: 'Quicksand-Bold',
    FONTFAMILY_REGULAR: 'Quicksand-Regular',
  },
  SPACER: {
    marginBottom: 10,
    marginTop: 10,
  },
};

STYLE_CONSTANTS.H1 = {
  fontFamily: STYLE_CONSTANTS.FONT.FONTFAMILY_BOLD,
  color: STYLE_CONSTANTS.COLORS.BLACK,
  fontSize: 16,
  textTransform: 'uppercase',
};

STYLE_CONSTANTS.H2 = {
  fontFamily: STYLE_CONSTANTS.FONT.FONTFAMILY_BOLD,
  color: STYLE_CONSTANTS.COLORS.BLACK,
  fontSize: 13,
  textTransform: 'uppercase',
};

STYLE_CONSTANTS.BUTTON_TITLE = {
  fontFamily: STYLE_CONSTANTS.FONT.FONTFAMILY_REGULAR,
  color: STYLE_CONSTANTS.COLORS.WHITE,
  fontSize: 12,
  textTransform: 'uppercase',
};

export const headerStyles = StyleSheet.create({
  iconLeft: {
    height: 32,
    marginLeft: 16,
    width: 32,
  },
  iconRight: {
    height: 32,
    marginRight: 16,
    width: 32,
  },
});
