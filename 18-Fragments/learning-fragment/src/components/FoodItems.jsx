import {useState} from "react";
import Item from "./Item";


const FoodItems = ({ items }) => {
  // let foodItems = ["Dal","Green vegetable","roti","c","d","e","f"];
  let [activeItems, SetActiveItems] = useState([]);

  let onBuyButton = (item,event)=>{
    let newItems = [...activeItems,item];
    setActiveItems(newItems);
  }

  return (
    <>
      <ul className="list-group">
        {items.map((items) => (
          <Item
            key={items}
            foodItem={items}
            bought = {activeItems.includes(item)}
            handleBuyButton={(event) => onBuyButton(item,event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
