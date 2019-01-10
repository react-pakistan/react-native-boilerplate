/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import styled from "styled-components";

import { STYLE_CONSTANTS } from "../../config/styles";

export const ContainerView = styled.View`
  padding: 10px;
`;

export const FlexContainerView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1Text = styled.Text`
  font-family: ${STYLE_CONSTANTS.H1.fontFamily};
  font-size: ${STYLE_CONSTANTS.H1.fontSize};
  color: ${STYLE_CONSTANTS.H1.color};
  text-transform: ${STYLE_CONSTANTS.H1.textTransform};
  margin-top: 10;
  margin-bottom: 10;
`;
