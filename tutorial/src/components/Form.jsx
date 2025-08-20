import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Enter todo item..."
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
