/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

// ########## Declare Global Style Constants Here ##########
export const STYLE_CONSTANTS = {
  COLORS: {
    PRIMARY: '#396355',
    SECONDARY: '#1B75BC',
    DARK_GRAY: '#707070',
    DARK_RED: '#8B0000',
    GRAY: '#CCCCCC',
    LIGHT_BLUE: '#8EBADB',
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    YELLOW: '#FDB92C',
    FACEBOOK: '#4267B2',
    GOOGLE: '#4285F4'
  },
  FONT: {
    FONTFAMILY_BOLD: 'Quicksand-Bold',
    FONTFAMILY_REGULAR: 'Quicksand-Regular',
  },
  SPACER: {
    marginTop: 10,
    marginBottom: 10,
  },
};

STYLE_CONSTANTS.H1 = {
  fontFamily: STYLE_CONSTANTS.FONT.FONTFAMILY_BOLD,
  fontSize: 16,
  color: STYLE_CONSTANTS.COLORS.BLACK,
  textTransform: 'uppercase',
};

STYLE_CONSTANTS.BUTTON_TITLE = {
  fontFamily: STYLE_CONSTANTS.FONT.FONTFAMILY_REGULAR,
  fontSize: 12,
  color: STYLE_CONSTANTS.COLORS.WHITE,
  textTransform: 'uppercase',
};
