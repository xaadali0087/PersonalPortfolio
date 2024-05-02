"use client"
import React from "react";
import styles from "./footer.module.scss";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  TiSocialInstagram,
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";
const Footer = () => {

  const handleNavigate = (item) => {
    if (item === "fb") {
      window.open("https://www.facebook.com/xaadali007?mibextid=ZbWKwL", "_blank");
    } else if (item === "insta") {
      window.open("https://www.instagram.com/xaadali0087?igsh=Y2JqcHU2bHJ0bGF5", "_blank");
    } else if (item === "link") {
      window.open("https://www.linkedin.com/in/xaad-ali-640555225/", "_blank");
    } else if (item === "tw") {
      window.open("https://x.com/saadali0087?t=mXBDJyvsyQPvug-Qn6tKiw&s=09", "_blank");
    }
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.brand}>
              <div className={styles.footerlogo}>
                <Image
                  src="/Logos/LogoWithText.png"
                  width={50}
                  height={50}
                  alt="footer-logo"
                />
              </div>
              <div className={styles.socialicons}>
                <div className={styles.icons}>
                  <BsFacebook className={styles.icon} onClick={() => handleNavigate("fb")} />
                  <AiFillTwitterCircle className={styles.icontwitter} onClick={() => handleNavigate("tw")} />
                  <TiSocialLinkedinCircular className={styles.iconlinkedin} onClick={() => handleNavigate("link")} />
                  <TiSocialInstagramCircular className={styles.iconinstagram} onClick={() => handleNavigate("insta")} />
                </div>
              </div>
            </div>
            <div className={styles.addressinfo}>
              <label>Xaad Ali</label>
              <span>+92 304 1144381</span>
              <p>
                Allah hoo Chowk, Block E Phase 1 Johar Town, Lahore, Punjab 54760 Pakistan
              </p>
            </div>
          </div>
          <div className={styles.copyright}>

            <span>&copy; 2024 Xaad Ali. All rights reserved</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
