import { TouchableOpacity } from '@react-pakistan/react-native-commons-collection';
import { IRNTheme } from '@react-pakistan/util-react-native-functions';
import { ThemedStyledProps } from 'styled-components';
import styled from 'styled-components/native';

export const HeaderIcon = styled(TouchableOpacity)`
  height: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : number => theme.spacing.xlarge}px;
  margin-horizontal: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : number => theme.spacing.small}px;
  width: ${({ theme } : ThemedStyledProps<{}, IRNTheme>) : number => theme.spacing.xlarge}px;
`;
