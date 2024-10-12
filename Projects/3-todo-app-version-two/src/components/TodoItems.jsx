import TodoItem from "./TodoItem";
import Styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={Styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
