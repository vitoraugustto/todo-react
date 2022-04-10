import Box from "./Box";
import Padding from "./Padding";

const Background = ({ children }) => {
  return (
    <Box height="100vh" width="100vw">
      {children}
    </Box>
  );
};

export default Background;
