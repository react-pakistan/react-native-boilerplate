import { Image, View } from '@react-pakistan/react-native-commons-collection';
import { IRNTheme } from '@react-pakistan/util-react-native-functions';
import { ThemedStyledProps } from 'styled-components';
import styled from 'styled-components/native';

export const DrawerContentWrapper = styled(View)`
  padding: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : number => theme.spacing.default}px;
`;

export const DrawerContentHeader = styled(View)`
  align-items: center;
`;

export const DrawerBanner = styled(Image)``;
