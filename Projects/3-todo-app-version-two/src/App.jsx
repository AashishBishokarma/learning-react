import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "BuysMilk",
      dueDate: "4/09/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/09/2023",
    },
    {
      name: "mata kharab",
      dueDate: "rightnow",
    },
  ];
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
