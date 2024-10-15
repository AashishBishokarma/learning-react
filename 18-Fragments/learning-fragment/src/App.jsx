import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from  "./components/Container"
import FoodInput from "./components/FoodInput"
import "./App.css"

function App() {
  // let foodItems = [];
  let foodItems = ["Dal","Green vegetable","roti","ghee","milk","pulse",];
  
  return( 
    <>
  <Container>
    <h1 className="food-heading">Healthy Food</h1>
    <FoodInput></FoodInput>
    <ErrorMessage items={foodItems} ></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
  </Container>
  
  
  </>
   )
}

export default App
