import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { createTask } from "../services/task";

import { capitalizeFirstLetter } from "../utils";
import { ReactComponent as AddCircle } from "../assets/svg/add-circle.svg";
import { ReactComponent as Check } from "../assets/svg/check.svg";

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
  Text,
} from "../components";

import { COLOR_WHITE, TITILLIUM } from "../themes/theme";

const CreateTaskScreen = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [counter, setCounter] = useState(3);

  const disableButton = !category || !title || created;

  const handleCreateTask = () => {
    setLoading(true);
    createTask({
      name: title,
      description: description,
      category: category,
    }).then(() => {
      setLoading(false);
      setCreated(true);
      clearFields();
    });
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter" && title) handleCreateTask();
  };

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  const clearFields = () => {
    setTitle("");
    setDescription("");
    setCategory("");
  };

  useEffect(() => {
    if (created)
      setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
  }, [created]);

  useEffect(() => {
    if (counter === 0) navigate("/todo-react");
  }, [counter]);

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
            testId="selectCategory"
            placeholder="Selecione uma categoria"
            onChange={(e) => handleSelectChange(e)}
            value={category}
            options={CATEGORIES.map((category, index) => (
              <Option
                testId={`category${capitalizeFirstLetter(category.value)}`}
                text={category.label}
                value={category.value}
                key={index}
              />
            ))}
          />
          <Margin top="12px" />
          <Button
            height="56px"
            borderColor={COLOR_WHITE}
            disabled={disableButton}
            onClick={handleCreateTask}
          >
            {!created ? (
              <DefaultContent loading={loading} />
            ) : (
              <CreatedTaskContent counter={counter} />
            )}
          </Button>
          <Margin top="12px" />
          <Link to="/todo-react">
            <Button>
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

const DefaultContent = ({ loading }) => {
  return (
    <>
      {loading ? (
        <Loading color={COLOR_WHITE} />
      ) : (
        <AddCircle fill={COLOR_WHITE} />
      )}
      <Margin right="8px" />
      Criar tarefa
    </>
  );
};

const CreatedTaskContent = ({ counter }) => {
  return (
    <>
      <Check fill={COLOR_WHITE} />
      <Margin right="8px" />
      <Text font={TITILLIUM}>Tarefa criada! Redirecionando em {counter}</Text>
    </>
  );
};

const CATEGORIES = [
  {
    value: "programming",
    label: "Programação",
  },
  {
    value: "games",
    label: "Jogos",
  },
  {
    value: "finance",
    label: "Finanças",
  },
  {
    value: "leisure",
    label: "Lazer",
  },
  {
    value: "daybyday",
    label: "Dia a dia",
  },
];

export default CreateTaskScreen;
