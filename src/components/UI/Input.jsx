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
  background-color: ${COLOR_BLACK_800};
  color: ${COLOR_WHITE};
  border: 1px solid ${COLOR_BLACK_800};
  border-radius: 8px;
  padding: 8px 10px;
  &:focus {
    border: 1px solid ${COLOR_BLACK_700};
  }
`;

export default Input;
