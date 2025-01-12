import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  return (
    <>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => onButtonClick("Rad")}>
          Rad
        </button>
        <button className={styles.button} onClick={() => onButtonClick("Deg")}>
          Deg
        </button>
        <button className={styles.button} onClick={() => onButtonClick("x!")}>
          x!
        </button>
        <button className={styles.button} onClick={() => onButtonClick("(")}>
          (
        </button>
        <button className={styles.button} onClick={() => onButtonClick(")")}>
          )
        </button>
        <button className={styles.button} onClick={() => onButtonClick("%")}>
          %
        </button>
        <button className={styles.button} onClick={() => onButtonClick("AC")}>
          AC
        </button>
      </div>

      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => onButtonClick("Inv")}>
          Inv
        </button>
        <button className={styles.button} onClick={() => onButtonClick("sin")}>
          sin
        </button>
        <button className={styles.button} onClick={() => onButtonClick("ln")}>
          ln
        </button>
        <button className={styles.button} onClick={() => onButtonClick("7")}>
          7
        </button>
        <button className={styles.button} onClick={() => onButtonClick("8")}>
          8
        </button>
        <button className={styles.button} onClick={() => onButtonClick("9")}>
          9
        </button>
        <button className={styles.button} onClick={() => onButtonClick("÷")}>
          ÷
        </button>
      </div>

      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => onButtonClick("π")}>
          π
        </button>
        <button className={styles.button} onClick={() => onButtonClick("cos")}>
          cos
        </button>
        <button className={styles.button} onClick={() => onButtonClick("log")}>
          log
        </button>
        <button className={styles.button} onClick={() => onButtonClick("4")}>
          4
        </button>
        <button className={styles.button} onClick={() => onButtonClick("5")}>
          5
        </button>
        <button className={styles.button} onClick={() => onButtonClick("6")}>
          6
        </button>
        <button className={styles.button} onClick={() => onButtonClick("×")}>
          ×
        </button>
      </div>

      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => onButtonClick("e")}>
          e
        </button>
        <button className={styles.button} onClick={() => onButtonClick("tan")}>
          tan
        </button>
        <button className={styles.button} onClick={() => onButtonClick("√")}>
          √
        </button>
        <button className={styles.button} onClick={() => onButtonClick("1")}>
          1
        </button>
        <button className={styles.button} onClick={() => onButtonClick("2")}>
          2
        </button>
        <button className={styles.button} onClick={() => onButtonClick("3")}>
          3
        </button>
        <button className={styles.button} onClick={() => onButtonClick("-")}>
          -
        </button>
      </div>

      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => onButtonClick("Ans")}>
          Ans
        </button>
        <button className={styles.button} onClick={() => onButtonClick("EXP")}>
          EXP
        </button>
        <button className={styles.button} onClick={() => onButtonClick("x^y")}>
          x<sup>y</sup>
        </button>
        <button className={styles.button} onClick={() => onButtonClick("0")}>
          0
        </button>
        <button className={styles.button} onClick={() => onButtonClick(".")}>
          .
        </button>
        <button className={styles.button} onClick={() => onButtonClick("=")}>
          =
        </button>
        <button className={styles.button} onClick={() => onButtonClick("+")}>
          +
        </button>
      </div>
    </>
  );
};

export default ButtonsContainer;
