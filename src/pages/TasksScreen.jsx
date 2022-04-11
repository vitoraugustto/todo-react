import React, { Fragment, useEffect, useState } from "react";

import Background from "../components/Layout/Background";
import Padding from "../components/Layout/Padding";
import Margin from "../components/Layout/Margin";
import Text from "../components/Typography/Text";
import Box from "../components/Layout/Box";

import { checkTask, fetchTasks } from "../services/task";

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const response = await fetchTasks();

    setTasks(response.data);
  };

  const handleCheckTask = (task) => {
    checkTask({ id: task._id });

    fetchData();
  };

  useEffect(() => {
    if (tasks.length < 1) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <Padding all="16px">
        <Text align="center">Lista de Tarefas</Text>
        <Margin top="8px" />
        {tasks.map((task, index) => (
          <Fragment key={index}>
            <Box
              onClick={() => handleCheckTask(task)}
              borderRadius="4px"
              bgColor="gray"
              style={{
                borderLeft: task.check
                  ? "4px solid lightgreen"
                  : "4px solid red",
              }}
            >
              <Padding all="8px">
                <Text>{task.name}</Text>
                <Text>{task.description}</Text>
              </Padding>
            </Box>
            <Margin top="8px" />
          </Fragment>
        ))}
      </Padding>
    </Background>
  );
};

export default TasksScreen;
