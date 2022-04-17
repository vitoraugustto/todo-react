import React from "react";
import styled from "styled-components";

import { COLOR_WHITE } from "../../themes/theme";

const Text = ({
  size,
  color,
  align,
  children,
  weight,
  font,
  lineHeight,
  spacing,
  style,
}) => {
  return (
    <StyledText
      weight={weight}
      font={font}
      color={color}
      align={align}
      size={size}
      lineHeight={lineHeight}
      spacing={spacing}
      style={{ ...style }}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.p`
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  font-family: ${(props) => (props.font ? props.font : "Lato")};
  color: ${(props) => (props.color ? props.color : COLOR_WHITE)};
  text-align: ${(props) => (props.align ? props.align : "left")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "normal")};
  letter-spacing: ${(props) => (props.spacing ? props.spacing : "normal")};
`;

export default Text;
