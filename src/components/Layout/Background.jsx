import Box from "./Box";
import Padding from "./Padding";

const Background = ({ children }) => {
  return (
    <Box bgColor="#404040" height="100vh" width="100vw">
      {children}
    </Box>
  );
};

export default Background;
