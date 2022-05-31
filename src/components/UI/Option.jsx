import React from "react";
import styled from "styled-components";

import { COLOR_BLACK_800, COLOR_WHITE } from "../../themes/theme";

const Option = ({ testId, disabled, selected, hidden, value, text }) => {
  return (
    <StyledOption
      data-testid={testId}
      disabled={disabled}
      hidden={hidden}
      selected={selected}
      value={value}
    >
      {text}
    </StyledOption>
  );
};

const StyledOption = styled.option`
  background-color: ${COLOR_BLACK_800};
  color: ${COLOR_WHITE};
`;

export default Option;
