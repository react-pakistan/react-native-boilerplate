/*
   Author: Taimoor Khan
   GitHub: https://github.com/Taimoormk
   Email: taimoor.m.k AT LIVE.COM 
*/

import styled from "styled-components";
import { Headline } from "react-native-paper";

import { STYLE_CONSTANTS, width } from "../../config/styles";

const AppHeadline = styled(Headline)`
  font-family: ${STYLE_CONSTANTS.H1.fontFamily};
  font-size: ${STYLE_CONSTANTS.H1.fontSize};
  color: ${STYLE_CONSTANTS.H1.color};
  text-transform: ${STYLE_CONSTANTS.H1.textTransform};
`;

export default AppHeadline;
