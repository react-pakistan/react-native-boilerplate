import { Text, View } from '@react-pakistan/react-native-commons-collection';
import { IRNTheme } from '@react-pakistan/util-react-native-functions';
import { ThemedStyledProps } from 'styled-components';
import styled from 'styled-components/native';

export const DashboardWrapper = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const DashboardHeading = styled(Text)``;

export const ListHeadingWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  padding-horizontal: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : number => theme.spacing.default}px;
  padding-vertical: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : number => theme.spacing.default}px;
`;
