import React from "react";

import Box from "./Box";

import { COLOR_BLACK_900 } from "../../themes/theme";

const Background = ({ children }) => {
  return (
    <Box
      style={{
        minHeight: "100vh",
      }}
      bgColor={COLOR_BLACK_900}
    >
      {children}
    </Box>
  );
};

export default Background;
