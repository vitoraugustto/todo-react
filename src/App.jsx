import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";
import TasksScreen from "./pages/TasksScreen";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/todo-react" element={<TasksScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
