"use client"
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./projects.module.scss";
import { FaMobileAlt, FaDesktop, FaLaptopMedical } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { GrSystem } from "react-icons/gr";
import { ProjectsData } from "./projectsData";
const Projects = () => {

  const handleOpenLink = (link: string) => {
    window.open(link, "_blank")
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <label>How many projects have I completed?</label>
            <span>
              I have worked on many projects that are based on different tech.
            </span>
          </div>
          <div className={styles.cardsection}>
            {ProjectsData.map((item, key) => (
              <div className={styles.card} key={key}>
                <div className={styles.curdiv}>
                  <div className={styles.heading}>{item.name}</div>
                  <div className={styles.text}>
                    {item.description}
                  </div>

                  <div className={styles.visit}>Visit Here:
                    <div onClick={() => handleOpenLink(item.link)}>
                      {item.heading}
                    </div>
                  </div>

                </div>
                <div className={styles.circlediv}>
                  <div className={styles.circleicon}>
                    <img src={item.logo} alt="" className={styles.icon} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
