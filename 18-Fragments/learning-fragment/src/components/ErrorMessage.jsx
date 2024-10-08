 const ErrorMessage=({items}) => {
  // let foodItems = ["Dal","Green vegetable","roti","c","d","e","f",];
  return(
    <>
    {items.length === 0 && <h2>I am hungry</h2>}
    </>
  );
}

export default ErrorMessage;