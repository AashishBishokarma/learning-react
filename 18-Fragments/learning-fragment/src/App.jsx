import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from  "./components/Container"
import "./App.css"

function App() {
  // let foodItems = [];
  let foodItems = ["Dal","Green vegetable","roti","c","d","e","f",];
  
  return( 
  <Container>
    <h1 className="food-heading">Healthy Food</h1>
    <ErrorMessage items={foodItems} ></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
  </Container>
  )
}

export default App
