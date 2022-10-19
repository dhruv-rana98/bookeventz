import React, { useState } from "react";
import styles from "./StateCounter.module.css";
const StateCounter = (props) => {
  const [counter, setCounter] = useState(0);
  const onClickHandler = (id) => {
    if (id === "minus") {
      setCounter((prevCount) => prevCount - 1);
    }
    if (id === "plus") {
      setCounter((prevCount) => prevCount + 1);
    }
  };
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <button
          className={styles.btn}
          id="minus"
          onClick={(e) => onClickHandler("minus")}
        >
          -
        </button>
        <p className={styles.content}>{counter}</p>
        <button
          className={styles.btn}
          id="plus"
          onClick={(e) => onClickHandler("plus")}
        >
          +
        </button>
      </main>
    </div>
  );
};

export default StateCounter;
