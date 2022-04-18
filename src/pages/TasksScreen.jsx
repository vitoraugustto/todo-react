import React, { Fragment, useEffect, useState } from "react";

import {
  Background,
  Box,
  Margin,
  Padding,
  Text,
  Button,
  Link,
  Loading,
} from "../components";

import { fetchTasks, checkTask, deleteTask } from "../services/task";

import { ReactComponent as AddCircle } from "../assets/svg/add-circle.svg";

import {
  COLOR_BLACK_800,
  COLOR_GREEN_500,
  COLOR_RED_600,
  COLOR_GRAY_300,
  COLOR_WHITE,
  TITILLIUM,
} from "../themes/theme";
import { formatDate, formatTime } from "../utils";

const TasksScreen = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchData = () => {
    setLoading(true);
    fetchTasks({}).then((response) => {
      setLoading(false);
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Background>
      <Padding all="16px">
        <Text align="center" size="28px" font={TITILLIUM}>
          Lista de Tarefas
        </Text>

        <Margin vertical="16px">
          <Link to="/todo-react/create-task">
            <Button borderColor={COLOR_WHITE}>
              <AddCircle fill={COLOR_WHITE} /> <Margin right="8px" /> Criar uma
              nova tarefa
            </Button>
          </Link>
        </Margin>

        <Box style={{ flexDirection: "column-reverse" }}>
          {loading ? (
            <Box hCenter>
              <Margin top="32px" />
              <Loading size="42px" />
            </Box>
          ) : (
            tasks.map((task, index) => (
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
            ))
          )}
        </Box>
      </Padding>
    </Background>
  );
};

//TODO: Adjust date
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
      <Padding all="8px">
        <Text size="18px" color={COLOR_RED_600} font={TITILLIUM}>
          {task.category}
        </Text>
        <Text color={COLOR_GRAY_300} size="24px" font={TITILLIUM}>
          {task.name}
        </Text>
        <Margin top="8px" />
        <Text font={TITILLIUM} size="16px">
          {`Criado em ${formatDate(task.date)} às ${formatTime(task.date)}`}
        </Text>
      </Padding>
    </Box>
  );
};

export default TasksScreen;
