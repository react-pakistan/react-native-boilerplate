// ########## Import Dependencies Here ##########
import { Image } from '@react-pakistan/react-native-commons-collection/image';
import { Text } from '@react-pakistan/react-native-commons-collection/text';
import { View } from '@react-pakistan/react-native-commons-collection/view';
import styled from 'styled-components/native';

// ########## Import Components Here ##########
import { width } from '@react-pakistan/react-native-commons-collection/utils';

export const DashboardWrapper = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const DashboardHeading = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  font-size: ${({ theme }) => theme.typography.h1.fontSize}px;
  text-align: ${({ theme }) => theme.typography.h1.textAlign};
  text-transform: uppercase;
`;

export const ListItemWrapper = styled(View)`
  width: ${width}px;
`;

export const ListItemBanner = styled(Image)`
  height: ${({ theme }) => theme.spacing.huge * 4}px;
  width: ${width}px;
`;

export const ListHeadingWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.default}px;
`;

export const TextWrapper = styled(View)`
  padding: ${({ theme }) => theme.spacing.default}px;
`;

export const LabelHeading = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.h2.fontFamily};
  font-size: ${({ theme }) => theme.typography.h2.fontSize}px;
  text-align: ${({ theme }) => theme.typography.h2.textAlign};
  text-transform: uppercase;
`;

export const LabelText = styled(Text)``;
