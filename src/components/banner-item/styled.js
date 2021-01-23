import { Image, Text, View } from '@react-pakistan/react-native-commons-collection';
import { width } from '@react-pakistan/util-react-native-functions';
import styled from 'styled-components/native';

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

export const LabelHeading = styled(Text)``;

export const LabelText = styled(Text)``;
