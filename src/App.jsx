import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Background from "./components/Layout/Background";
import Box from "./components/Layout/Box";
import { SubTitle, Title } from "./components/Typography/Headings";

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Box>
          <Title>TO.DO</Title>
          <SubTitle>Organize suas tasks</SubTitle>
        </Box>
      </Background>
    </>
  );
}

export default App;
