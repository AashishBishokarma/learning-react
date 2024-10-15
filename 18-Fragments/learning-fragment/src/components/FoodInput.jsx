import styles from "./FoodInput.module.css";

const FoodInput = () => {

  const handleOnChange = (event) =>{
    console.log(event.target.value)
  }

  return (
    <>
      <input
        className={styles.FoodInput}
        type="text"
        placeholder="Enter Food Item here"
        onChange = {handleOnChange }
      />
    </>
  );
};

export default FoodInput;
