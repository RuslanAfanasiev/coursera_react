import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EventPlanner from "./components/event_planner/EventPlanner";
import TodoList from "./components/todo_list/TodoList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventPlanner />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Router>
  );
};

export default App;
