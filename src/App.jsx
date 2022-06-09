import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";
import TasksScreen from "./pages/TasksScreen";
import SingleTaskScreen from "./pages/SingleTaskScreen";
import CreateTaskScreen from "./pages/CreateTaskScreen";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/todo-react" element={<TasksScreen />} />
        <Route path="/todo-react/task/:id" element={<SingleTaskScreen />} />
        <Route path="/todo-react/create-task" element={<CreateTaskScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
