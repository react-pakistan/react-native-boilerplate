// ########## Import Dependencies Here ##########
import { Text, View } from '@react-pakistan/react-native-commons-collection';
import styled from 'styled-components/native';

export const SignInWrapper = styled(View)`
  align-items: center;
  background-color: #CCCCCC;
  flex: 1;
  justify-content: center;
`;

export const OAuthHeading = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.spacing.default}px;
  text-transform: uppercase;
`;

export const Spacer = styled(View)`
  flex: 0;
  margin-vertical: ${({ theme }) => theme.spacing.small}px;
`;
