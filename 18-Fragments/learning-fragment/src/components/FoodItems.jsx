import Item from "./Item"
const FoodItems = () => {
  let foodItems = ["Dal","Green vegetable","roti","c","d","e","f",];
  
  return(
    <>
  <ul class="list-group">
    {foodItems.map((food) => (
      <Item key={props.food}  foodItem={Item} ></Item>
      ))}
  </ul>
  </>
  );
};

export default FoodItems;
