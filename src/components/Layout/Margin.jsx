import React from "react";
import styled from "styled-components";

const PX = "px";

const Margin = ({
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
    <StyledMargin
      top={top || all | vertical}
      right={right || all || horizontal}
      bottom={bottom || all || vertical}
      left={left || all || horizontal}
      style={{ ...style }}
    >
      {children}
    </StyledMargin>
  );
};

const StyledMargin = styled.div`
  margin-top: ${(props) => (props.top ? props.top + PX : 0)};
  margin-right: ${(props) => (props.right ? props.right + PX : 0)};
  margin-bottom: ${(props) => (props.bottom ? props.bottom + PX : 0)};
  margin-left: ${(props) => (props.left ? props.left + PX : 0)};
`;

export default Margin;
