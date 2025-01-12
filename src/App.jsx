import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [initialDisplay, setDisplay] = useState("");
  const onButtonClick = (event) => console.log(event);

  return (
    <div className={styles.calculator}>
      <Display displayValue={initialDisplay}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
