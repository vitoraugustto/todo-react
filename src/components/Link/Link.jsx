import React from "react";
import styled from "styled-components";

import { Link as RouterLink } from "react-router-dom";

const Link = ({ testId, to = "", state, style, children }) => {
  return (
    <StyledLink data-testid={testId} to={to} state={state} style={{ ...style }}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  display: inherit;
  flex-direction: inherit;
`;

export default Link;
