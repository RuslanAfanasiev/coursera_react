import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EventPlanner from "./components/event_planner/EventPlanner";
import TodoList from "./components/todo_list/TodoList";
import FetchData from "./components/fetch_data/FetchData";
import FetchYogaData from "./components/fetch_data/FetchYogaData";
import FeedbackForm from "./components/feedback_form/FeedbackForm";
import ProductList from "./components/ecommerce_rtk/ProductList";
import ShoppingCart from "./components/ecommerce_rtk/ShoppingCart";
import SuperCoin from "./components/ecommerce_rtk/SuperCoin";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<EventPlanner />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/fetch" element={<FetchData />} /> */}
        {/* <Route path="/" element={<FetchYogaData />} /> */}
        {/* <Route path="/" element={<FeedbackForm />} /> */}
        {/* <Route path="/" element={<ProductList />} /> */}
        <Route path="/" element={
          <>
            <ProductList />
            <ShoppingCart />
            <SuperCoin />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
