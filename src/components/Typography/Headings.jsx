import React from "react";
import styled from "styled-components";

export const Title = ({ color, align, children }) => {
  return (
    <StyledTitle color={color} align={align}>
      {children}
    </StyledTitle>
  );
};

export const SubTitle = ({ color, align, children }) => {
  return (
    <StyledSubTitle color={color} align={align}>
      {children}
    </StyledSubTitle>
  );
};

const StyledTitle = styled.h1`
  display: flex;
  font-weight: bold;
  font-size: 48px;
  font-family: Lato;
  color: ${(props) => (props.color ? props.color : "white")};
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

const StyledSubTitle = styled.h2`
  display: flex;
  font-weight: normal;
  font-size: 32px;
  font-family: Lato;
  color: ${(props) => (props.color ? props.color : "white")};
  text-align: ${(props) => (props.align ? props.align : "left")};
`;
