import { Image, Text, View } from '@react-pakistan/react-native-commons-collection';
import { IRNTheme } from '@react-pakistan/util-react-native-functions';
import { ThemedStyledProps } from 'styled-components';
import styled from 'styled-components/native';

export const ProfileWrapper = styled(View)`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const ProfileHeading = styled(Text)``;

export const Avatar = styled(Image)`
  border-radius: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : number => theme.radius.full}px;
`;
