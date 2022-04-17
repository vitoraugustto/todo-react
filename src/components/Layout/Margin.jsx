import React from "react";
import styled from "styled-components";

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
      top={top || all || vertical}
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
  display: inherit;
  flex-direction: inherit;
  margin-top: ${(props) => (props.top ? props.top : 0)};
  margin-right: ${(props) => (props.right ? props.right : 0)};
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)};
  margin-left: ${(props) => (props.left ? props.left : 0)};
`;

export default Margin;
