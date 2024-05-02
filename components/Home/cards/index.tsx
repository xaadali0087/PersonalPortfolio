import React from "react";
import styles from "./card.module.scss";
import { TechData } from "./Data";
const Cards = () => {

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {TechData.map((item, key) => (
            <div className={styles.card} key={key}>
              <div className={styles.heading}>{item.heading}</div>
              <div className={styles.text}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
