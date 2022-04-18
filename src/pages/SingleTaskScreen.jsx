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
  TITILLIUM,
} from "../themes/theme";
import { formatDate, formatTime } from "../utils";

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
            <Text size="16px">Categoria:</Text>
            <Text
              size="20px"
              color={COLOR_RED_600}
              weight="bold"
              font={TITILLIUM}
            >
              {task.category}
            </Text>
            <Margin top="20px" />
            <Text size="16px">Título:</Text>
            <Text size="28px" weight="bold" font={TITILLIUM}>
              {task.name}
            </Text>
            <Margin top="8px" />
            <Text size="16px">Descrição:</Text>
            <Margin top="8px" />
            <Text size="20px" lineHeight="24px" font={TITILLIUM}>
              {task.description}
            </Text>
            <Margin top="16px" />
            <Text size="16px" font={TITILLIUM}>
              Criado em {formatDate(task.date)} às {formatTime(task.date)}
            </Text>
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
