import React from "react";
import styled from "styled-components";

const Box = ({
  color,
  style,
  bgColor,
  width,
  height,
  vCenter,
  hCenter,
  borderRadius,
  borderColor,
  onClick,
  children,
}) => {
  return onClick ? (
    <StyledButton
      color={color}
      bgColor={bgColor}
      height={height}
      width={width}
      vCenter={vCenter}
      hCenter={hCenter}
      borderRadius={borderRadius}
      borderColor={borderColor}
      onClick={onClick}
      style={{ ...style }}
    >
      {children}
    </StyledButton>
  ) : (
    <StyledBox
      color={color}
      bgColor={bgColor}
      height={height}
      width={width}
      vCenter={vCenter}
      hCenter={hCenter}
      borderRadius={borderRadius}
      borderColor={borderColor}
      style={{ ...style }}
    >
      {children}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.vCenter ? "center" : undefined)};
  align-items: ${(props) => (props.hCenter ? "center" : undefined)};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  color: ${(props) => (props.color ? props.color : "white")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 0)};
  border: ${(props) =>
    props.borderColor ? "1px solid " + props.borderColor : undefined};
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.vCenter ? "center" : undefined)};
  align-items: ${(props) => (props.hCenter ? "center" : undefined)};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  color: ${(props) => (props.color ? props.color : "white")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 0)};
  border: ${(props) =>
    props.borderColor ? "1px solid " + props.borderColor : undefined};
`;

export default Box;
