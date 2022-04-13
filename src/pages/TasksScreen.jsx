import React, { Fragment, useEffect, useState } from "react";

import Background from "../components/Layout/Background";
import Padding from "../components/Layout/Padding";
import Margin from "../components/Layout/Margin";
import Text from "../components/Typography/Text";
import Box from "../components/Layout/Box";
import Row from "../components/Layout/Row";
import Icon from "../components/UI/Icon/Icon";

import {
  fetchTasks,
  checkTask,
  deleteTask,
  createTask,
} from "../services/task";

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
    createTask({ name: title, description: description });

    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Background>
      <Padding all="16px">
        <Text align="center">Lista de Tarefas</Text>
        <Margin vertical="8px">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Margin top="8px" />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Margin top="8px" />
          <Box
            hCenter
            borderRadius="8px"
            borderColor="white"
            onClick={handleCreateTask}
          >
            <Padding all="8px">
              <Text>Criar Task</Text>
            </Padding>
          </Box>
        </Margin>
        {tasks.map((task, index) => (
          <Task
            task={task}
            key={index}
            handleCheckTask={handleCheckTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </Padding>
    </Background>
  );
};

const Task = ({ task, handleCheckTask, handleDeleteTask }) => {
  return (
    <Fragment>
      <Box
        onClick={() => handleCheckTask(task)}
        borderRadius="4px"
        bgColor="gray"
        style={{
          borderLeft: task.check ? "4px solid lightgreen" : "4px solid red",
        }}
      >
        <Row style={{ justifyContent: "space-between" }} vCenter>
          <Padding all="8px">
            <Text>{task.name}</Text>
            <Text size="12px">{task.description}</Text>
          </Padding>
          <Margin right="20px">
            <Box onClick={(e) => handleDeleteTask(e, task)}>
              <Icon iconName="trash-outline--white" size="20px" />
            </Box>
          </Margin>
        </Row>
      </Box>
      <Margin top="8px" />
    </Fragment>
  );
};

export default TasksScreen;
