import React from "react";
import styled from "styled-components";

const Padding = ({
  children,
  style,
  top,
  right,
  bottom,
  left,
  all,
  flex,
  vertical,
  horizontal,
}) => {
  return (
    <StyledPadding
      flex={flex}
      top={top || all || vertical}
      right={right || all || horizontal}
      bottom={bottom || all || vertical}
      left={left || all || horizontal}
      style={{ ...style }}
    >
      {children}
    </StyledPadding>
  );
};

const StyledPadding = styled.div`
  display: inherit;
  flex-direction: inherit;
  padding-top: ${(props) => (props.top ? props.top : 0)};
  padding-right: ${(props) => (props.right ? props.right : 0)};
  padding-bottom: ${(props) => (props.bottom ? props.bottom : 0)};
  padding-left: ${(props) => (props.left ? props.left : 0)};
`;

export default Padding;
