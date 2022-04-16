import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as SVG } from "../../assets/svg/loading.svg";

import { COLOR_BLUE_300 } from "../../themes/theme";

const Loading = ({ size, color, style }) => {
  return (
    <StyledSVG
      color={color}
      size={size}
      style={{
        ...style,
      }}
    />
  );
};

const rotation = keyframes`
  0% {
    transform: rotate(0deg)
  }
  
  100% {
    transform: rotate(360deg)
  }
`;

const StyledSVG = styled(SVG)`
  stroke: ${(props) => (props.color ? props.color : COLOR_BLUE_300)};
  height: ${(props) => (props.size ? props.size : "24px")};
  width: ${(props) => (props.size ? props.size : "24px")};
  animation: ${rotation} 0.7s linear infinite;
`;

export default Loading;
