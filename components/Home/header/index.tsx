import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import CommonSlider from "@/components/_Common/Slider";
const Header = () => {

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.hire}>
            <div className={styles.heading}>
              I code to bring your dreams to <span>LIFE.</span>
            </div>
            <div className={styles.text}>
              Once you share your dream, I envision it and then bring it to
              life with the latest technologies. You will always feel ahead of
              the game with your competitors.
            </div>
            <div className={styles.hirebtn}>
              <button>Message Me</button>
            </div>
          </div>
          <div className={styles.headerlogo}>
            <div className={styles.logo}>
              <CommonSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
