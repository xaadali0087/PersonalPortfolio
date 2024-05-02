import React from "react";
import styles from "./exploreservice.module.scss";
import { FaMobileAlt, FaDesktop, FaLaptopMedical } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { GrSystem } from "react-icons/gr";
const ExploreService = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <label>Explore My Services</label>
            <span>
              You have the dream; I have the technological roadmaps for end-to-end development of scalable solutions. I provide development services that adapt seamlessly to your project requirements and business needs.
            </span>
          </div>
          <div className={styles.cardsection}>
            <div className={styles.card}>
              <div className={styles.curdiv}>
                <div className={styles.heading}>Blockchain Development</div>
                <div className={styles.text}>
                  I provide complete wallet connection, smart contract integration, swap and transfer coins/tokens, development, integration, and deployment.
                </div>
              </div>
              <div className={styles.circlediv}>
                <div className={styles.circleicon}>
                  <SiBlockchaindotcom className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.curdiv}>
                <div className={styles.heading}>Web App Development</div>
                <div className={styles.text}>
                  I use a combination of the latest technologies to build secure, robust, and scalable enterprise-class apps.
                </div>
              </div>
              <div className={styles.circlediv}>
                <div className={styles.circleicon}>
                  <FaDesktop className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.curdiv}>
                <div className={styles.heading}>UI & UX Design</div>
                <div className={styles.text}>
                  Get a UI & UX design or a prototype of your dream project
                  before you begin the main project.I have expertly skilled
                  in-house designer and partner that will make your UI & UX
                  designs stand out from the crowd.
                </div>
              </div>
              <div className={styles.circlediv}>
                <div className={styles.circleicon}>
                  <FaLaptopMedical className={styles.icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreService;
