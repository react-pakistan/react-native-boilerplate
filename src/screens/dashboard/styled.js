// ########## Import Dependencies Here ##########
import { Image } from '@taimoormk/react-native-commons-collection/image';
import { Text } from '@taimoormk/react-native-commons-collection/text';
import { View } from '@taimoormk/react-native-commons-collection/view';
import styled from 'styled-components/native';

// ########## Import Components Here ##########
import { width } from '../../globals/styles';

export const DashboardWrapper = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const DashboardHeading = styled(Text)`
  font-family: 'Roboto-Bold';
  color: #000000;
  font-size: 16px;
  text-transform: uppercase;
`;

export const ListItemWrapper = styled(View)`
  width: ${width}px;
`;

export const ListItemBanner = styled(Image)`
  height: 200px;
  width: ${width}px;
`;

export const LabelText = styled(Text)``;
