import styles from "./App.module.css";
import ButtonsConatiner from "./components/ButtonsContainer";
import Display from "./components/Display";
function App() {
  return (
    <body className={styles.container}>
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonsConatiner></ButtonsConatiner>
      </div>
    </body>
  );
}

export default App;
