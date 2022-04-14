import React, { Fragment, useEffect, useState } from "react";

import Background from "../components/Layout/Background";
import Padding from "../components/Layout/Padding";
import Margin from "../components/Layout/Margin";
import Box from "../components/Layout/Box";
import Row from "../components/Layout/Row";

import Text from "../components/Typography/Text";

import Icon from "../components/UI/Icon/Icon";
import Input from "../components/UI/Input";

import {
  fetchTasks,
  checkTask,
  deleteTask,
  createTask,
} from "../services/task";
import { COLOR_BLACK_700, COLOR_BLACK_800, TITILLIUM } from "../themes/theme";

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
            onKeyUp={(e) => (e.key === "Enter" ? handleCreateTask() : null)}
            placeholder="Digite um título..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Margin top="8px" />
          <Input
            placeholder="Digite uma descrição..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Margin top="12px" />
          <Box
            hCenter
            borderRadius="8px"
            borderColor={COLOR_BLACK_700}
            onClick={handleCreateTask}
          >
            <Padding all="8px">
              <Text font={TITILLIUM} spacing="1.5px">
                Criar Tarefa
              </Text>
            </Padding>
          </Box>
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
          borderLeft: task.check ? "4px solid lightgreen" : "4px solid red",
        }}
      >
        <Row style={{ justifyContent: "space-between" }} vCenter>
          <Padding all="8px">
            <Text font={TITILLIUM}>{task.name}</Text>
            <Padding horizontal="8px">
              <Text font={TITILLIUM} lineHeight="12px" size="10px">
                {task.description}
              </Text>
            </Padding>
          </Padding>
          <Margin right="20px">
            <Box onClick={(e) => handleDeleteTask(e, task)}>
              <Icon iconName="trash-outline--white" size="16px" />
            </Box>
          </Margin>
        </Row>
      </Box>
      <Margin top="8px" />
    </Fragment>
  );
};

export default TasksScreen;
