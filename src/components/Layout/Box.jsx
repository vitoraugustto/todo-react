import React from "react";
import styled from "styled-components";
import { addTestId } from "../../utils";

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
  testId,
  children,
  flex,
}) => {
  return onClick ? (
    <StyledButton
      testId={testId}
      onClick={onClick}
      color={color}
      bgColor={bgColor}
      height={height}
      width={width}
      vCenter={vCenter}
      hCenter={hCenter}
      borderRadius={borderRadius}
      borderColor={borderColor}
      flex={flex}
      style={{ ...style }}
    >
      {children}
    </StyledButton>
  ) : (
    <StyledBox
      testId={testId}
      color={color}
      bgColor={bgColor}
      height={height}
      width={width}
      vCenter={vCenter}
      hCenter={hCenter}
      borderRadius={borderRadius}
      borderColor={borderColor}
      flex={flex}
      style={{ ...style }}
    >
      {children}
    </StyledBox>
  );
};

const StyledBox = styled.div.attrs((props) => {
  return addTestId(props);
})`
  display: flex;
  flex-direction: column;
  word-break: break-word;
  flex: ${(props) => (props.flex ? 1 : undefined)};
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

const StyledButton = styled.button.attrs((props) => {
  return addTestId(props);
})`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flex ? 1 : undefined)};
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
