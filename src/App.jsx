import React, { Fragment, useEffect, useState } from "react";

import GlobalStyle from "./components/GlobalStyle";
import Background from "./components/Layout/Background";
import Box from "./components/Layout/Box";
import Padding from "./components/Layout/Padding";
import Margin from "./components/Layout/Margin";

import { SubTitle } from "./components/Typography/Headings";
import Text from "./components/Typography/Text";

import { checkTask, fetchTasks } from "./services/task";

function App() {
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
  }, []);

  return (
    <>
      <GlobalStyle />
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
    </>
  );
}

export default App;
