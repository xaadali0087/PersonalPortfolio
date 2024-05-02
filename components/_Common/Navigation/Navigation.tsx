"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navigation.module.scss";
import MobileNav from "../MobileNav";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";
const Navigation = () => {
  const [isMobileMenu, setisMobileMenu] = useState(false);
  const handleMobileNav = () => {
    setisMobileMenu(!isMobileMenu);
  };
  const pathname = usePathname();


  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.brandlogo}>
            <Image src="/Logos/LogoWithText.png" width={40} height={54} alt="Profile" />
          </div>
          {!isMobileMenu && (
            <FiMenu className={styles.mobileIcon} onClick={handleMobileNav} />
          )}

          <div className={styles.navItems}>
            <div
              className={
                pathname === "/" ? styles.active : styles.inactive
              }
            >
              <div className={styles.item}>
                <Link href="/" className={styles.text}>
                  Home
                </Link>
                <div className={styles.activebar}></div>
              </div>
            </div>
            <div
              className={
                pathname === "/swap-transfer" ? styles.active : styles.inactive
              }
            >
              <div className={styles.item}>
                <Link
                  // href="/swap-transfer" 
                  href="#"
                  className={styles.text}>
                  Swap/Transfer
                </Link>
                <div className={styles.activebar}></div>
              </div>
            </div>

            <div
              className={
                pathname === "/mobile-topup" ? styles.active : styles.inactive
              }
            >
              <div className={styles.item}>
                <Link
                  // href="/mobile-topup" 
                  href="#"
                  className={styles.text}>
                  Mobile TopUp
                </Link>
                <div className={styles.activebar}></div>
              </div>
            </div>
            <div
              className={
                pathname === "/payment-methods" ? styles.active : styles.inactive
              }
            >
              <div className={styles.item}>
                <Link
                  // href="/payment-methods" 
                  href="#"
                  className={styles.text}>
                  Payment Methods
                </Link>
                <div className={styles.activebar}></div>
              </div>
            </div>

            <div
              className={
                pathname === "/login-signup" ? styles.active : styles.inactive
              }
            >
              <div className={styles.item}>
                <Link
                  // href="/login-signup"
                  href="#"
                  className={styles.text}>
                  Login/SignUp
                </Link>
                <div className={styles.activebar}></div>
              </div>
            </div>

          </div>
          {
            <MobileNav
              isMobileMenu={isMobileMenu}
              handleMobileNav={handleMobileNav}
            />
          }
        </div>
      </div>
    </>
  );
};

export default Navigation;
