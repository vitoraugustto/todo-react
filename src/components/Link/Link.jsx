import React from "react";
import styled from "styled-components";

import { Link as RouterLink } from "react-router-dom";

const Link = ({ to = "", state, style, children }) => {
  return (
    <StyledLink to={to} state={state} style={{ ...style }}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(RouterLink)`
  text-decoration: none;
`;

export default Link;
