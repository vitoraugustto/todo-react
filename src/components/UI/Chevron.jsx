import React from "react";
import { ReactComponent as ChevronIcon } from "../../assets/svg/chevron.svg";

const ROTATE = {
  up: { transform: "rotate(270deg)" },
  right: { transform: "rotate(360deg)" },
  down: { transform: "rotate(90deg)" },
  left: { transform: "rotate(180deg)" },
};

const Chevron = ({ position, size, color, style }) => {
  return (
    <ChevronIcon
      fill={color}
      style={{
        height: size,
        width: size,
        ...ROTATE[position],
        ...style,
      }}
    />
  );
};

export default Chevron;
