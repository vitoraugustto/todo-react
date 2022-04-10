import React from "react";
import styled from "styled-components";

const PX = "px";

const Padding = ({
  children,
  style,
  top,
  right,
  bottom,
  left,
  all,
  vertical,
  horizontal,
}) => {
  return (
    <StyledPadding
      top={top || all | vertical}
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
  padding-top: ${(props) => (props.top ? props.top + PX : 0)};
  padding-right: ${(props) => (props.right ? props.right + PX : 0)};
  padding-bottom: ${(props) => (props.bottom ? props.bottom + PX : 0)};
  padding-left: ${(props) => (props.left ? props.left + PX : 0)};
`;

export default Padding;
