// ########## Import Dependencies Here ##########
import { Text, View } from '@react-pakistan/react-native-commons-collection';
import styled from 'styled-components/native';

// ########## Import Components Here ##########

export const DashboardWrapper = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const DashboardHeading = styled(Text)``;

export const ListHeadingWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.default}px;
`;
