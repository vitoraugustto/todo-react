import React from "react";
import styled from "styled-components";
import ICONS from "./icons";

const Icon = ({ iconName, size }) => {
  return <StyledIcon src={ICONS[iconName].source} size={size} />;
};

const StyledIcon = styled.img`
  width: ${(props) => (props.size ? props.size : "24px")};
  height: ${(props) => (props.size ? props.size : "24px")};
`;

export default Icon;
