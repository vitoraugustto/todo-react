import React from "react";
import styled from "styled-components";

const Text = ({ size, color, align, children, weight, font }) => {
  return (
    <StyledText
      weight={weight}
      font={font}
      color={color}
      align={align}
      size={size}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.p`
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  font-family: ${(props) => (props.font ? props.font : "Lato")};
  color: ${(props) => (props.color ? props.color : "white")};
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export default Text;
