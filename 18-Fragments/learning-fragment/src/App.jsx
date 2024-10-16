import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from  "./components/Container";
import FoodInput from "./components/FoodInput";
import {useState } from "react";
import "./App.css"

function App() {
  // let foodItems = [];
  // let foodItems = ["Dal","Green vegetable","roti","ghee","milk","pulse",];

  
  let [foodItems,setFoodItems]= useState([]);



  const onKeyDown = (event) =>{
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems,newFoodItem]
      setFoodItems(newItems);
      console.log("Food value entered is "+newFoodItem);
    }

  }
  
  return( 
    <>
  <Container>
    <h1 className="food-heading">Healthy Food</h1>
    <FoodInput handleKeyDown={onKeyDown}></FoodInput>
    <ErrorMessage items={foodItems} ></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
  </Container>
  </>
   )
}

export default App
