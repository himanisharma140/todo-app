import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { BsFillCalendar2RangeFill } from "react-icons/bs";


const Todos = ({ todos}) => {

  const d = new Date();
  let hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  console.log(hours); 
  var test = 1;
  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.map(todo => (
        setInterval(()=>{
          if(hours === todo.edate){
             test = 0
          }
        }),
        // <ListGroupItem key={todo.id} style={{background: todo.isComplete ? 'black' : 'white'}}>
        <ListGroupItem key={todo.id} style={{background: test === 0 ? 'green' : 'grey'}}>
        
          {todo.data}
          <span>
          <BsFillCalendar2RangeFill/> &nbsp;
          {todo.edate}{todo.isComplete}
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>

    
  );
};

export default Todos;
