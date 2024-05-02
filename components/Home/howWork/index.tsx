import React from "react";
import styles from "./howwork.module.scss";
import { FaWpforms } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import { BiClipboard, BiBox } from "react-icons/bi";
import { LuPackageSearch } from "react-icons/lu";

const HowWork = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <label>How I Work</label>
            <p>My work process is very simple.</p>
          </div>
          <div className={styles.work}>
            <div className={styles.card}>
              <div className={styles.logo}>
                <div className={styles.circlediv}>
                  <BiClipboard className={styles.icon} />
                  <LuPackageSearch className={styles.hoverIcon} />
                </div>
              </div>
              <div className={styles.text}>
                Identify project <br />
                requirements or stories
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.logo}>
                <div className={styles.circlediv}>
                  <BiBox className={styles.icon} />
                </div>
              </div>
              <div className={styles.text}>
                Add project tasks plan in <br />a management tool
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.logo}>
                <div className={styles.circlediv}>
                  <FaWpforms className={styles.icon} />
                </div>
              </div>
              <div className={styles.text}>
                Push updates to staging <br />
                server
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.logo}>
                <div className={styles.circlediv}>
                  <AiOutlineDatabase className={styles.icon} />
                </div>
              </div>
              <div className={styles.text}>
                Make project ready for
                <br />
                production deployment
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWork;
