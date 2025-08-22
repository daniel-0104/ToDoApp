import { useState } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

export default function ToDo() {
  const [todoList, setTodoList] = useState([]);
  const completedTodo = todoList.filter((todo)=>todo.done).length;
  const totalTodo = todoList.length;
  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <ToDoList todoList={todoList} setTodoList={setTodoList} />
      <Footer completedTodo={completedTodo} totalTodo={totalTodo} />
    </div>
  );
}
