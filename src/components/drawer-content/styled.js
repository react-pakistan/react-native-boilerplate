import { Image, View } from '@react-pakistan/react-native-commons-collection';
import styled from 'styled-components/native';

export const DrawerContentWrapper = styled(View)`
  padding: ${({ theme }) => theme.spacing.default}px;
`;

export const DrawerContentHeader = styled(View)`
  align-items: center;
`;

export const DrawerBanner = styled(Image)`
  height: 150px;
  width: 100%;
`;
