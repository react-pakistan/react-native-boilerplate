import React, { memo, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { appTheme } from '../../theme';
import { IAppProviderProps } from './type';

export const AppProvider = memo(({
  children,
} : IAppProviderProps) : ReactElement => (
  <ThemeProvider theme={appTheme}>
    {children}
  </ThemeProvider>
));
