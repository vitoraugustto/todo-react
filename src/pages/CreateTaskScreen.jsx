import React, { useState } from "react";

import {
  Background,
  Box,
  Button,
  Chevron,
  Input,
  Link,
  Loading,
  Margin,
  Option,
  Padding,
  Select,
} from "../components";

import { ReactComponent as AddCircle } from "../assets/svg/add-circle.svg";

import { createTask } from "../services/task";

import { COLOR_WHITE } from "../themes/theme";

const CreateTaskScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(false);

  const handleCreateTask = () => {
    setLoading(true);
    createTask({
      name: title,
      description: description,
      category: category,
    }).then(setLoading(false));

    setTitle("");
    setDescription("");
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter" && title) handleCreateTask();
  };

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Background style={{ justifyContent: "center" }}>
      <Padding all="16px">
        <Box>
          <Input
            onKeyUp={handleOnKeyUp}
            placeholder="Digite um título..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Margin top="8px" />
          <Input
            onKeyUp={handleOnKeyUp}
            placeholder="Digite uma descrição..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Margin top="8px" />
          <Select
            placeholder="Selecione uma categoria"
            onChange={(e) => handleSelectChange(e)}
            value={category}
            options={OPTIONS.map((option, index) => (
              <Option text={option.text} value={option.value} key={index} />
            ))}
          />
          <Margin top="12px" />
          <Button
            borderColor={COLOR_WHITE}
            disabled={!category || !title}
            onClick={handleCreateTask}
          >
            {loading ? (
              <Loading color={COLOR_WHITE} />
            ) : (
              <AddCircle fill={COLOR_WHITE} />
            )}
            <Margin right="8px" />
            Criar tarefa
          </Button>
          <Margin top="12px" />
          <Link to="/todo-react">
            <Button disabled={!category || !title} onClick={handleCreateTask}>
              <Chevron color={COLOR_WHITE} position="left" />
              <Margin right="8px" />
              Voltar
            </Button>
          </Link>
        </Box>
      </Padding>
    </Background>
  );
};

const OPTIONS = [
  {
    value: "programming",
    text: "Programação",
  },
  {
    value: "games",
    text: "Jogos",
  },
  {
    value: "finance",
    text: "Finanças",
  },
  {
    value: "leisure",
    text: "Lazer",
  },
  {
    value: "daybyday",
    text: "Dia a dia",
  },
];

export default CreateTaskScreen;
