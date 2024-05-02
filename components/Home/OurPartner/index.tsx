import React from "react";
import styles from "./ourpartner.module.scss";
import Marquee from "react-fast-marquee";
import Image from "next/image";
const OurPartner = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <label>Our Partners</label>
            <span>Contact us to see how you can become a partner</span>
          </div>
          <div className={styles.marquelogo}>
            <Marquee className={styles.marquee} speed={60} gradient={false}>
              <div className={styles.fullLogo}>
                <Image
                  width={200}
                  height={50}
                  src={"/carevan.png"}
                  alt="marque logo"
                />
              </div>
              <div className={styles.fullLogo}>
                <Image
                  width={200}
                  height={50}
                  src={"/duare-logo.png"}
                  alt="marque logo"
                />
              </div>
              <div className={styles.fullLogo}>
                <Image
                  width={200}
                  height={50}
                  src={"/offspace.png"}
                  alt="marque logo"
                />
              </div>
              <div className={styles.fullLogo}>
                <Image
                  width={200}
                  height={50}
                  src={"/uihut.svg"}
                  alt="marque logo"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPartner;
