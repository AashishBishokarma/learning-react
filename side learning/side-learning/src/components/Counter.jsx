import React,{useState} from "react";
import "./Counter.css"

const Counter = () => {
  const [count,setCount]= useState(0);
  return (
    <div className="Counter-container">
      <p id="para">You have clicked {count} tiems</p>
      <button id="btn" onClick={() => setCount(count +1)}>click me</button>
    </div>
  );
};

export default Counter;
