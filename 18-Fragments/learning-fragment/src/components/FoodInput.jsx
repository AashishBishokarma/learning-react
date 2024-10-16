import styles from "./FoodInput.module.css";

const FoodInput = ({handleKeyDown}) => {


  return (
    <>
      <input
        className={styles.FoodInput}
        type="text"
        placeholder="Enter Food Item here"
        onKeyDown = {handleKeyDown}
      />
    </>
  );
};

export default FoodInput;
