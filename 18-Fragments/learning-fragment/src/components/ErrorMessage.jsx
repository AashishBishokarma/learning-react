export default function ErrorMessage() {
  let foodItems = ["Dal","Green vegetable","roti","c","d","e","f",];
  return(
    <>
    {foodItems.length === 0 && <h2>i am hungry</h2>}
    </>
  );
}