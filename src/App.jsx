import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";
import SingleTaskScreen from "./pages/SingleTaskScreen";
import TasksScreen from "./pages/TasksScreen";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/todo-react" element={<TasksScreen />} />
        <Route path="/todo-react/task" element={<SingleTaskScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
