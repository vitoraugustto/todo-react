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
  Text,
} from "../components";

import { COLOR_BLACK_800, COLOR_WHITE, TITILLIUM } from "../themes/theme";
import { CATEGORIES } from "./TasksScreen";

import { formatDate, formatTime } from "../utils";

const SingleTaskScreen = () => {
  const location = useLocation();
  const { task } = location.state;

  return (
    <Background style={{ justifyContent: "center" }}>
      <Padding all="16px">
        <Box
          style={{
            borderLeft: `4px solid ${CATEGORIES[task.category].color}`,
          }}
          bgColor={COLOR_BLACK_800}
          borderRadius="4px"
        >
          <Padding all="8px">
            <Text size="16px">Categoria:</Text>
            <Text
              size="20px"
              color={CATEGORIES[task.category].color}
              font={TITILLIUM}
            >
              {CATEGORIES[task.category].label}
            </Text>
            <Margin top="20px" />
            <Text size="16px">Título:</Text>
            <Text size="28px" font={TITILLIUM}>
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
