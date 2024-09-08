import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal","Green vegetable","roti","c","d","e","f",];
  
  return( 
  <>
  
  <h1>Healthy Food</h1>
  <ErrorMessage />
  <FoodItems />
  </>
  )
}

export default App
