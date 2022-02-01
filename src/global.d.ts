/* eslint-disable @typescript-eslint/no-empty-interface */

import { IRNTheme } from '@react-pakistan/util-react-native-functions';

declare module 'react-star-ratings';
declare module 'styled-components' {
  export interface DefaultTheme extends IRNTheme {}
}
