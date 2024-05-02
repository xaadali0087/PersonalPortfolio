import React from "react";
import Navigation from "../_Common/Navigation/Navigation";
import styles from "./layout.module.scss";
import Footer from "../_Common/Footer/Footer";
const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Navigation />
        <div className={styles.container}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
