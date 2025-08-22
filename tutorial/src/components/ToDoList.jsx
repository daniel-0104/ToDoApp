import ToDoItem from "./ToDoItem";
import styles from "./todolist.module.css";
export default function ToDoList({ todoList, setTodoList }) {
  const sortedTodo = todoList.slice().sort((a,b)=>Number(a.done)-Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodo.map((item) => (
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
