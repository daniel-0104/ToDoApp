import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState({name: '', done: false});
  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo({name: '', done: false});
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            type="text"
            onChange={(e) => setTodo({name:e.target.value, done:false})}
            value={todo.name}
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
