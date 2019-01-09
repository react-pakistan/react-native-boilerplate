/*
   Author: Taimoor Khan
   GitHub: https://github.com/Taimoormk
   Email: taimoor.m.k AT LIVE.COM 
*/

import styled from "styled-components";
import { TextInput } from "react-native-paper";

import { STYLE_CONSTANTS, width } from "../../config/styles";

const AppTextInput = styled(TextInput)`
  color: ${STYLE_CONSTANTS.COLORS.SECONDARY};
  margin-bottom: ${STYLE_CONSTANTS.SPACER.marginBottom};
`;

export default AppTextInput;
