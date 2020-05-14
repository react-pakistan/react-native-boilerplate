// ########## Import Dependencies Here ##########
import { Image } from '@react-pakistan/react-native-commons-collection/image';
import { Text } from '@react-pakistan/react-native-commons-collection/text';
import { View } from '@react-pakistan/react-native-commons-collection/view';
import styled from 'styled-components/native';

// ########## Import Components Here ##########
import { width } from '../../globals/styles';

export const DashboardWrapper = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const DashboardHeading = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.spacing.default}px;
  text-transform: uppercase;
`;

export const ListItemWrapper = styled(View)`
  width: ${width}px;
`;

export const ListItemBanner = styled(Image)`
  height: ${({ theme }) => theme.spacing.huge * 4}px;
  width: ${width}px;
`;

export const ListHeadingWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.default}px;
`;

export const LabelText = styled(Text)``;
