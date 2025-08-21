import styles from "./todoitem.module.css";
export default function ToDoItem({ item, todoList, setTodoList }) {
  function handleDelete(item) {
    console.log("delete the item", item);
    setTodoList(todoList.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.list}>
      <div className={styles.itemName}>
        {item}
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
