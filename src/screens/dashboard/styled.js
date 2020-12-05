// ########## Import Dependencies Here ##########
import { Text, View } from '@react-pakistan/react-native-commons-collection';
import styled from 'styled-components/native';

// ########## Import Components Here ##########

export const DashboardWrapper = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const DashboardHeading = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  font-size: ${({ theme }) => theme.typography.h1.fontSize}px;
  line-height: ${({ theme }) => theme.typography.h2.lineHeight}px;
  text-align: ${({ theme }) => theme.typography.h1.textAlign};
  text-transform: uppercase;
`;

export const ListHeadingWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.default}px;
`;
