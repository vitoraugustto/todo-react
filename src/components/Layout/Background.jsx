import React from "react";

import Box from "./Box";

import { COLOR_BLACK_900 } from "../../themes/theme";

const Background = ({ children }) => {
  return (
    <Box bgColor={COLOR_BLACK_900} height="100vh" width="100vw">
      {children}
    </Box>
  );
};

export default Background;
