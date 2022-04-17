import React from "react";
import styled from "styled-components";

import { COLOR_WHITE, TITILLIUM } from "../../themes/theme";

const Button = ({
  color,
  bgColor,
  rounded,
  borderColor,
  onClick,
  disabled,
  children,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      color={color}
      bgColor={bgColor}
      rounded={rounded}
      borderColor={borderColor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "8px"};
  padding: 8px;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  color: ${(props) => (props.color ? props.color : COLOR_WHITE)};
  letter-spacing: 1.5px;
  border-radius: ${(props) => (props.rounded ? "8px" : "0")};
  font-family: ${TITILLIUM};
`;

export default Button;
