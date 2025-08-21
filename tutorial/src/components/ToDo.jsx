import { useState } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

export default function ToDo() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <ToDoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
