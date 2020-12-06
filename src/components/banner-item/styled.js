import { View, Image, Text } from '@react-pakistan/react-native-commons-collection';
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

export const LabelHeading = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.h2.fontFamily};
  font-size: ${({ theme }) => theme.typography.h2.fontSize}px;
  line-height: ${({ theme }) => theme.typography.h2.lineHeight}px;
  text-align: ${({ theme }) => theme.typography.h2.textAlign};
  text-transform: uppercase;
`;

export const LabelText = styled(Text)``;
