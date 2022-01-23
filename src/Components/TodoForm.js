import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { FormGroup, Input, InputGroup,Button, Form} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 } from "uuid";
import Todos from "./Todos";

toast.configure()
const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const [duedate, setDuedate] = useState("");
  const [todos, setTodos] = useState([]);
  const isComplete = "false";

  

  const showToast = (todo) => {
    toast.error('Due date of this task is expired: ' + todo.data ,{autoClose:10000})
    const localTodos = localStorage.getItem("todos");
    console.log(localTodos);
    {
      localTodos.map((ele,ind) => {
      
      localTodos[ind].isComplete = true;
    })
  }}
  

  

  
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const handleSubmit = e => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter the Todo");
    }
    if (duedate === "") {
        return alert("Please enter the Due date");
    }
    var patt = new RegExp("^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$");
    var res = patt.test(duedate);
    
    if(res===false)
      alert("Invalid time format!");
    
    if(res===true){
      const todo = {
        data: todoString,
        edate: duedate,
        isComplete: false,
        id: v4()
      };

      setTodos([...todos, todo]);
      //console.log(todos);

      setTodoString("");
      setDuedate("");

      var splittime = todo.edate.split(":");
      var expirationtime = splittime[0]*3600+splittime[1]*60+splittime[2]*1;
      var today = new Date()
      var time = today.getHours()*3600+today.getMinutes()*60+today.getSeconds();

      const timeout = setTimeout(() => showToast(todo), Math.abs(expirationtime-time)*1000);
      return () => { 
        clearTimeout(timeout) 
      };
    }
  };

  
return (
  <div>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input type="text" name="todo" id="todo" placeholder="Enter a todo string" value={todoString} onChange={e => setTodoString(e.target.value)}/>
          
            <Input type="text" name="duedate" placeholder="HH:MM:SS" format="HH:mm:ss" value={duedate} onChange={e => setDuedate(e.target.value)}/>
           
            <Button color="success">Add Todo</Button>
         </InputGroup>
      </FormGroup>
    </Form>
    <Todos todos={todos}/>
    </div>
  );
};

export default TodoForm;
