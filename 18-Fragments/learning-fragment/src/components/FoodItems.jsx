import Item from "./Item"

const FoodItems = ({items}) => {
  // let foodItems = ["Dal","Green vegetable","roti","c","d","e","f"];
  
  return(
    
  <>
  <ul className="list-group">
    {items.map((items) =>  (
      <Item key={items}  foodItem={items} ></Item>
      ))}
  </ul>
  </>
  );
};

export default FoodItems;
