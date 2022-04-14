import React from "react";
import styled from "styled-components";

const Row = ({ style, children, vCenter, hCenter }) => {
  return (
    <StyledRow vCenter={vCenter} hCenter={hCenter} style={{ ...style }}>
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  word-wrap: break-word;
  width: 100%;
  justify-content: ${(props) => (props.hCenter ? "center" : undefined)};
  align-items: ${(props) => (props.vCenter ? "center" : undefined)};
`;

export default Row;
