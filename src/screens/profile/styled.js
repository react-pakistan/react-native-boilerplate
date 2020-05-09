// ########## Import Dependencies Here ##########
import { Text } from '@react-pakistan/react-native-commons-collection/text';
import { View } from '@react-pakistan/react-native-commons-collection/view';
import styled from 'styled-components';

export const ProfileWrapper = styled(View)`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const ProfileHeading = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.spacing.default}px;
  text-transform: uppercase;
`;
