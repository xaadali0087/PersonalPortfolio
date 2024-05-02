import React from "react";
import styles from "./loader.module.scss";

const Loader = () => {
  return <div className={`${styles.load} ${styles.open}`}></div>;
};

export default Loader;

