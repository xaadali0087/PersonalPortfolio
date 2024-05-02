import React from "react";
import styles from "./fewreasons.module.scss";
import Image from "next/image";
import { FaSlack, FaBattleNet, FaUncharted } from "react-icons/fa";
const FewReasons = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.heading}>
            A Few Reasons Why You Should Choose Me
          </div>
          <div className={styles.reasons}>
            <div className={styles.cardsection}>
              <div className={styles.card}>
                <div className={styles.logo}>
                  <FaSlack className={styles.icon} />
                </div>
                <div className={styles.text}>
                  <label>Highly Cost-Effective</label>
                  <span>
                    I offer extremely affordable pricing for building enterprise-class solutions and ensure you won’t have to reinvest in it in the future.
                    Projects are charged at a fixed or hourly rate of $20-40. Contact me now for a project estimation.
                  </span>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.logo}>
                  <FaBattleNet className={styles.icon} />
                </div>
                <div className={styles.text}>
                  <label>Support and Maintenance</label>
                  <span>
                    Each project comes with my guarantee of 1 year of client
                    support at no additional cost. During the development and
                    post-development phases, you will never feel abandoned. I will always be accessible through my communication
                    channels.
                  </span>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.logo}>
                  <FaUncharted className={styles.icon} />
                </div>
                <div className={styles.text}>
                  <label>Scalability</label>
                  <span>
                    I ensure my software solutions are built to accommodate
                    business growth over time. You will never feel restricted.
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.logo}>
              <Image
                src="/Images/maintenance.svg"
                width={600}
                height={500}
                alt="reasons logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FewReasons;
