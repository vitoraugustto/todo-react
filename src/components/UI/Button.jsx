import React from "react";
import styled from "styled-components";

import { COLOR_WHITE, TITILLIUM } from "../../themes/theme";
import Row from "../Layout/Row";

const Button = ({
  color,
  bgColor,
  rounded,
  borderColor,
  onClick,
  disabled,
  fontSize,
  children,
}) => {
  return (
    <StyledButton
      fontSize={fontSize}
      disabled={disabled}
      color={color}
      bgColor={bgColor}
      rounded={rounded}
      borderColor={borderColor}
      onClick={onClick}
    >
      <Row hCenter vCenter>
        {children}
      </Row>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "8px"};
  padding: 10px;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  color: ${(props) => (props.color ? props.color : COLOR_WHITE)};
  letter-spacing: 1.5px;
  border-radius: ${(props) => (props.rounded ? "8px" : "0")};
  font-family: ${TITILLIUM};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "22px")};
`;

export default Button;
