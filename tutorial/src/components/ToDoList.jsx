import ToDoItem from "./ToDoItem";

export default function ToDoList({todoList}){
    return(
        <div>
            {todoList.map((item) => (
                <ToDoItem key={item} item={item} />
            ))}
        </div>
    );
}