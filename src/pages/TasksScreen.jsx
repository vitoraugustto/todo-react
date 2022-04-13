import React, { Fragment, useEffect, useState } from "react";

import Background from "../components/Layout/Background";
import Padding from "../components/Layout/Padding";
import Margin from "../components/Layout/Margin";
import Text from "../components/Typography/Text";
import Box from "../components/Layout/Box";
import Row from "../components/Layout/Row";

import { fetchTasks, checkTask, deleteTask } from "../services/task";
import Icon from "../components/UI/Icon/Icon";

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const response = await fetchTasks();

    setTasks(response.data);
  };

  const handleCheckTask = (task) => {
    checkTask({ id: task._id }).then(() => fetchData());
  };

  const handleDeleteTask = (e, task) => {
    e.stopPropagation();

    deleteTask({ id: task._id }).then(() => fetchData());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Background>
      <Padding all="16px">
        <Text align="center">Lista de Tarefas</Text>
        <Margin top="8px" />
        {tasks.map((task, index) => (
          <Task
            task={task}
            handleCheckTask={handleCheckTask}
            handleDeleteTask={handleDeleteTask}
            key={index}
          />
        ))}
      </Padding>
    </Background>
  );
};

export default TasksScreen;

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
