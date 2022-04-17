import React, { Fragment, useEffect, useState } from "react";

import {
  Background,
  Box,
  Input,
  Margin,
  Padding,
  Text,
  Row,
  Button,
  Link,
  Select,
  Option,
} from "../components";

import {
  fetchTasks,
  checkTask,
  deleteTask,
  createTask,
} from "../services/task";

import {
  COLOR_BLACK_800,
  COLOR_GREEN_500,
  COLOR_RED_600,
  COLOR_GRAY_300,
  TITILLIUM,
} from "../themes/theme";
import { formatDate } from "../utils";

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState();

  const fetchData = () => {
    fetchTasks({}).then((response) => {
      console.log(response);
      setTasks(response.data);
    });
  };

  const handleCheckTask = (task) => {
    checkTask({ id: task._id }).then(fetchData);
  };

  const handleDeleteTask = (e, task) => {
    e.stopPropagation();

    deleteTask({ id: task._id }).then(fetchData);
  };

  const handleCreateTask = () => {
    createTask({
      name: title,
      description: description,
      category: category,
    }).then(fetchData);

    setTitle("");
    setDescription("");
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter" && title) handleCreateTask();
  };

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Background>
      <Padding all="16px">
        <Text weight="bold" size="20px" font={TITILLIUM}>
          Lista de Tarefas
        </Text>
        <Margin vertical="8px">
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
          <Button disabled={!category || !title} onClick={handleCreateTask}>
            Criar tarefa
          </Button>
        </Margin>
        <Box style={{ flexDirection: "column-reverse" }}>
          {tasks.map((task, index) => (
            <Fragment key={index}>
              <Link to="/todo-react/task" state={{ task: task }}>
                <Task
                  task={task}
                  handleCheckTask={handleCheckTask}
                  handleDeleteTask={handleDeleteTask}
                />
              </Link>
              <Margin top="8px" />
            </Fragment>
          ))}
        </Box>
      </Padding>
    </Background>
  );
};

const Task = ({ task }) => {
  return (
    <Box
      borderRadius="4px"
      bgColor={COLOR_BLACK_800}
      style={{
        borderLeft: task.check
          ? `4px solid ${COLOR_GREEN_500}`
          : `4px solid ${COLOR_RED_600}`,
      }}
    >
      <Row>
        <Padding flex all="8px">
          <Text size="8px">{task.category}</Text>
          <Text
            color={COLOR_GRAY_300}
            lineHeight="18px"
            size="16px"
            font={TITILLIUM}
          >
            {task.name}
          </Text>
          <Margin top="8px" />
          <Text font={TITILLIUM} lineHeight="12px" size="8px">
            Criado em: {task.date}
          </Text>
        </Padding>
      </Row>
    </Box>
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

export default TasksScreen;
