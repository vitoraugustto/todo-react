import React from "react";
import styled from "styled-components";

import { Option } from "..";

import { COLOR_BLACK_800, COLOR_WHITE } from "../../themes/theme";

const Select = ({ placeholder, value, onChange, options }) => {
  return (
    <StyledSelect onChange={onChange} value={value} placeholder={placeholder}>
      <Option value="" text={placeholder} hidden />
      {options}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  background-color: transparent;
  color: ${COLOR_WHITE};
  border: 0;
  border-bottom: 1px solid ${COLOR_BLACK_800};
  padding: 8px;
  text-overflow: "";
  transition: 0.2s;
  &:focus {
    border-bottom: 1px solid ${COLOR_WHITE};
  }
`;

export default Select;
