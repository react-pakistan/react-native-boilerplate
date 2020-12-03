import { TouchableOpacity } from '@react-pakistan/react-native-commons-collection';
import styled from 'styled-components/native';

export const HeaderIcon = styled(TouchableOpacity)`
  height: ${({ theme }) => theme.spacing.xlarge}px;
  margin-horizontal: ${({ theme }) => theme.spacing.small}px;
  width: ${({ theme }) => theme.spacing.xlarge}px;
`;
