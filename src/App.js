import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { BsFillCalendar2RangeFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";

const App = () => {
  return (
    <Container fluid>
      <h1>Always on Notification</h1>
      <h4>Manage tasks in a new handy home <br/> Keep your mind of every task</h4>
      <TodoForm />
    </Container>
  );
};

export default App;
