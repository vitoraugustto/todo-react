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
  TITILLIUM,
} from "../themes/theme";

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchData = () => {
    fetchTasks().then((response) => setTasks(response.data));
  };

  const handleCheckTask = (task) => {
    checkTask({ id: task._id }).then(fetchData);
  };

  const handleDeleteTask = (e, task) => {
    e.stopPropagation();

    deleteTask({ id: task._id }).then(fetchData);
  };

  const handleCreateTask = () => {
    createTask({ name: title, description: description }).then(fetchData);

    setTitle("");
    setDescription("");
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter" && title) handleCreateTask();
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
          <Margin top="12px" />
          <Button onClick={handleCreateTask}>Criar tarefa</Button>
        </Margin>
        <Box style={{ flexDirection: "column-reverse" }}>
          {tasks.map((task, index) => (
            <Task
              task={task}
              key={index}
              handleCheckTask={handleCheckTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </Box>
      </Padding>
    </Background>
  );
};

const Task = ({ task, handleCheckTask, handleDeleteTask }) => {
  return (
    <Fragment>
      <Box
        flex
        onClick={() => handleCheckTask(task)}
        borderRadius="4px"
        bgColor={COLOR_BLACK_800}
        style={{
          borderLeft: task.check
            ? `4px solid ${COLOR_GREEN_500}`
            : `4px solid ${COLOR_RED_600}`,
        }}
      >
        <Row style={{ justifyContent: "space-between" }} vCenter>
          <Padding all="8px">
            <Text size="16px" font={TITILLIUM}>
              {task.name}
            </Text>
            <Padding horizontal="8px">
              <Text font={TITILLIUM} lineHeight="12px" size="14px">
                {task.description}
              </Text>
            </Padding>
          </Padding>
        </Row>
      </Box>
      <Margin top="8px" />
    </Fragment>
  );
};

export default TasksScreen;
