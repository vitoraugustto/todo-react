import React from "react";
import styled from "styled-components";
import { ReactComponent as SVG } from "../../assets/svg/chevron.svg";

import { COLOR_WHITE } from "../../themes/theme";

const Chevron = ({ position, size, color, style }) => {
  return (
    <StyledSVG
      position={position}
      color={color}
      size={size}
      style={{
        ...style,
      }}
    />
  );
};

const ROTATE = {
  up: "rotate(270deg)",
  right: "rotate(360deg)",
  down: "rotate(90deg)",
  left: "rotate(180deg)",
};

const StyledSVG = styled(SVG)`
  fill: ${(props) => (props.color ? props.color : COLOR_WHITE)};
  height: ${(props) => (props.size ? props.size : "24px")};
  width: ${(props) => (props.size ? props.size : "24px")};
  transform: ${(props) =>
    props.position ? ROTATE[props.position] : ROTATE.right};
`;

export default Chevron;
