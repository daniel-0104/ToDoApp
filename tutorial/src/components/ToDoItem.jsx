import styles from "./todoitem.module.css";
export default function ToDoItem({ item, todoList, setTodoList }) {
  function handleDelete(item) {
    setTodoList(todoList.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todoList.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodoList(newArray);
  }
  const completed = item.done ? styles.completed : '';
  return (
    <div className={styles.list}>
      <div className={styles.itemName}>
        <span className={completed} onClick={() => handleClick(item.name)}>{item.name}</span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            ×
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
