import { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
      {todoList.map((item) => (
        <ToDoItem key={item} item={item} />
      ))}
    </div>
  );
}
