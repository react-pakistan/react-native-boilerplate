import { IRNTheme, isTablet, scale, theme } from '@react-pakistan/util-react-native-functions';
import { Appearance } from 'react-native';

const isDarkMode = Appearance.getColorScheme() === 'dark';

export const appTheme : IRNTheme = { ...theme };
appTheme.misc = {
  ...appTheme.misc,
  darkMode: isDarkMode,
};
appTheme.typography.h1 = {
  ...appTheme.typography.h1,
  color: theme.misc.isDarkMode ? theme.colors.white : theme.colors.black,
  fontFamily: 'Roboto-Bold',
  fontSize: isTablet() ? scale(36) : scale(28),
  letterSpacing: 0,
  lineHeight: isTablet() ? scale(36) : scale(28),
  textAlign: 'left',
  textTransform: 'uppercase',
};
appTheme.typography.h2 = {
  ...appTheme.typography.h2,
  color: theme.misc.isDarkMode ? theme.colors.white : theme.colors.black,
  fontFamily: 'Roboto-Medium',
  fontSize: isTablet() ? scale(22) : scale(22),
  letterSpacing: 0,
  lineHeight: isTablet() ? scale(36) : scale(28),
  textAlign: 'left',
  textTransform: 'none',
};
appTheme.typography.h3 = {
  ...appTheme.typography.h3,
  color: theme.misc.isDarkMode ? theme.colors.white : theme.colors.black,
  fontFamily: 'Roboto-Regular',
  fontSize: isTablet() ? scale(16) : scale(16),
  letterSpacing: 0,
  lineHeight: isTablet() ? scale(36) : scale(28),
  textAlign: 'left',
  textTransform: 'none',
};
appTheme.typography.text = {
  ...appTheme.typography.text,
  color: theme.misc.isDarkMode ? theme.colors.white : theme.colors.black,
  fontFamily: 'Roboto-Regular',
  fontSize: isTablet() ? scale(14) : scale(14),
  letterSpacing: 0,
  lineHeight: isTablet() ? scale(32) : scale(20),
  textAlign: 'left',
  textTransform: 'none',
};
