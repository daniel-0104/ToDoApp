import ToDoItem from "./ToDoItem";
import styles from "./todolist.module.css";
export default function ToDoList({ todoList, setTodoList }) {
  return (
    <div className={styles.list}>
      {todoList.map((item) => (
        <ToDoItem
          key={item.name}
          item={item}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}
