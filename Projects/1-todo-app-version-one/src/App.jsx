import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/TodoItem1";
import Todoitem2 from "./components/TodoItem2";
import "./App.css"

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <Todoitem1 />
        <Todoitem2 />
      </div>
      
      
    </center>
  );
}

export default App;
