import React from "react";
import styled from "styled-components";

import { COLOR_BLACK_800, COLOR_WHITE, TITILLIUM } from "../../themes/theme";

const Input = ({
  onChange,
  onBlur,
  onKeyUp,
  fontSize,
  value,
  placeholder,
  style,
}) => {
  return (
    <StyledInput
      autoFocus
      onBlur={onBlur}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      value={value}
      fontSize={fontSize}
      style={{ ...style }}
    />
  );
};

const StyledInput = styled.input`
  font-family: ${TITILLIUM};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  background-color: transparent;
  color: ${COLOR_WHITE};
  border-bottom: 1px solid ${COLOR_BLACK_800};
  padding: 8px 10px;
  &:focus {
    border-bottom: 1px solid ${COLOR_WHITE};
  }
  transition: 0.2s;
`;

export default Input;
