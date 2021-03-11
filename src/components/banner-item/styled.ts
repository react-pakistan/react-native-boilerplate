import { Image, Text, View } from '@react-pakistan/react-native-commons-collection';
import { IRNTheme, width } from '@react-pakistan/util-react-native-functions';
import { ThemedStyledProps } from 'styled-components';
import styled from 'styled-components/native';

export const ListItemWrapper = styled(View)`
  width: ${width}px;
`;

export const ListItemBanner = styled(Image)``;

export const ListHeadingWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  padding: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : number => theme.spacing.default}px;
`;

export const TextWrapper = styled(View)`
  padding: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : number => theme.spacing.default}px;
`;

export const LabelHeading = styled(Text)``;

export const LabelText = styled(Text)``;
