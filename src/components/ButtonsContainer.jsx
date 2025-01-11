import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  return (
    <>
      <div className={styles.buttonsContainer}>
        <button className={styles.button}>Rad</button>
        <button className={styles.button}>Deg</button>
        <button className={styles.button}>x!</button>
        <button className={styles.button}>(</button>
        <button className={styles.button}>)</button>
        <button className={styles.button}>%</button>
        <button className={styles.button}>AC</button>
      </div>

      <div className={styles.buttonsContainer}>
        <button className={styles.button}>Inv</button>
        <button className={styles.button}>sin</button>
        <button className={styles.button}>ln</button>
        <button className={styles.button}>7</button>
        <button className={styles.button}>8</button>
        <button className={styles.button}>9</button>
        <button className={styles.button}>÷</button>
      </div>

      <div className={styles.buttonsContainer}>
        <button className={styles.button}>π</button>
        <button className={styles.button}>cos</button>
        <button className={styles.button}>log</button>
        <button className={styles.button}>4</button>
        <button className={styles.button}>5</button>
        <button className={styles.button}>6</button>
        <button className={styles.button}>×</button>
      </div>

      <div className={styles.buttonsContainer}>
        <button className={styles.button}>e</button>
        <button className={styles.button}>tan</button>
        <button className={styles.button}>√</button>
        <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
        <button className={styles.button}>3</button>
        <button className={styles.button}>-</button>
      </div>

      <div className={styles.buttonsContainer}>
        <button className={styles.button}>Ans</button>
        <button className={styles.button}>EXP</button>
        <button className={styles.button}>
          x<sup>y</sup>
        </button>
        <button className={styles.button}>0</button>
        <button className={styles.button}>.</button>
        <button className={styles.button}>=</button>
        <button className={styles.button}>+</button>
      </div>
    </>
  );
};

export default ButtonsContainer;
