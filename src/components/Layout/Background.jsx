import { COLOR_BLACK_900 } from "../../themes/theme";
import Box from "./Box";

const Background = ({ children }) => {
  return (
    <Box bgColor={COLOR_BLACK_900} height="100vh" width="100vw">
      {children}
    </Box>
  );
};

export default Background;
