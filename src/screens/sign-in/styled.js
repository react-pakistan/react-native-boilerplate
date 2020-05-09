// ########## Import Dependencies Here ##########
import { Text } from '@react-pakistan/react-native-commons-collection/text';
import { View } from '@react-pakistan/react-native-commons-collection/view';
import styled from 'styled-components/native';

export const SignInWrapper = styled(View)`
  align-items: center;
  background-color: #CCCCCC;
  flex: 1;
  justify-content: center;
`;

export const OAuthHeading = styled(Text)`
  font-family: 'Roboto-Bold';
  color: #000000;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Spacer = styled(View)`
  flex: 0;
  margin-vertical: 10px;
`;
