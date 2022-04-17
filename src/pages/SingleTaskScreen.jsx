import React from "react";
import { useLocation } from "react-router-dom";
import {
  Background,
  Box,
  Button,
  Chevron,
  Link,
  Margin,
  Padding,
  Row,
  Text,
} from "../components";
import {
  COLOR_BLACK_800,
  COLOR_GREEN_500,
  COLOR_RED_600,
  COLOR_WHITE,
} from "../themes/theme";

const SingleTaskScreen = () => {
  const location = useLocation();
  const { task } = location.state;

  return (
    <Background style={{ justifyContent: "center" }}>
      <Padding all="16px">
        <Box
          style={{
            borderLeft: task.check
              ? `4px solid ${COLOR_GREEN_500}`
              : `4px solid ${COLOR_RED_600}`,
          }}
          bgColor={COLOR_BLACK_800}
          borderRadius="4px"
        >
          <Padding all="8px">
            <Text size="10px">Categoria:</Text>
            <Text size="14px">{task.category}</Text>
            <Margin top="16px" />
            <Text size="10px">Título:</Text>
            <Text size="18px">{task.name}</Text>
            <Margin top="4px" />
            <Text size="10px">Descrição:</Text>
            <Text size="14px">{task.description}</Text>
          </Padding>
        </Box>

        <Box>
          <Link to="/todo-react">
            <Button>
              <Chevron color={COLOR_WHITE} position="left" />
              <Margin right="10px" />
              Voltar
            </Button>
          </Link>
        </Box>
      </Padding>
    </Background>
  );
};

export default SingleTaskScreen;
