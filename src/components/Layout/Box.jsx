import React from "react";
import styled from "styled-components";

const Box = ({ color, style, bgColor, width, height, children }) => {
  return (
    <StyledBox
      color={color}
      bgColor={bgColor}
      height={height}
      width={width}
      style={{ ...style }}
    >
      {children}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  display: "flex";
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#404040")};
  color: ${(props) => (props.color ? props.color : "white")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

export default Box;
