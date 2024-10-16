import styles from "./Item.module.css";

const Item = ({foodItem,handleBuyButton}) => {

  

  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item`}>
        <span className={styles["kg-span"]}>{foodItem}</span>{" "}
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleBuyButton}
        >
          buy
        </button>
      </li>
    </>
  );
};

export default Item;
