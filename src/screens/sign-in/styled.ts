import { IRNTheme } from '@react-pakistan/util-react-native-functions';
import { Text, View } from '@react-pakistan/react-native-commons-collection';
import { ThemedStyledProps } from 'styled-components';
import styled from 'styled-components/native';

export const SignInWrapper = styled(View)`
  align-items: center;
  background-color: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : string => theme.colors.lightGrey};
  flex: 1;
  justify-content: center;
`;

export const OAuthHeading = styled(Text)`
  color: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : string => theme.colors.black};
  font-family: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : string => theme.typography.fontFamily};
  font-size: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : number => theme.spacing.default}px;
  text-transform: uppercase;
`;
