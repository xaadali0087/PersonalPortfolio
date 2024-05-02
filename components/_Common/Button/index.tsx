import React from "react";
import Loader from "../Loader";
import styles from "./Button.module.scss";

function Button({ primary, children, onClick, disabled, type, style }) {
  return (
    <>
      <button
        onClick={onClick}
        type={type ? "submit" : "button"}
        className={primary ? styles.primary : styles.secondary}
        disabled={disabled}
        style={style}
      >
        {disabled ? (
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
        ) : (
          children
        )}
      </button>
    </>
  );
}

export default Button;
