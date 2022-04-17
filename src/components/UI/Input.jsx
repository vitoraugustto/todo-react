import React from "react";
import styled from "styled-components";

import {
  COLOR_BLACK_700,
  COLOR_BLACK_800,
  COLOR_WHITE,
} from "../../themes/theme";

const Input = ({ onChange, onKeyUp, value, placeholder, style }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      value={value}
      style={{ ...style }}
    />
  );
};

const StyledInput = styled.input`
  background-color: transparent;
  color: ${COLOR_WHITE};
  border-bottom: 2px solid ${COLOR_BLACK_800};
  padding: 8px 10px;
  &:focus {
    border-bottom: 2px solid ${COLOR_BLACK_700};
  }
  transition: 0.2s;
`;

export default Input;
