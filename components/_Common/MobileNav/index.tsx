import React from "react";
import styles from "./mobilenav.module.scss";
//@ts-ignore
import { useSpring, animated } from "react-spring";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface props {
  isMobileMenu: boolean;
  handleMobileNav: () => void;
}
const MobileNav = ({ isMobileMenu, handleMobileNav }: props) => {

  const pathname = usePathname();
  const StylesProps = useSpring({
    opacity: isMobileMenu ? 0.95 : 0,
    marginTop: isMobileMenu ? 0 : -50,
  }) as any;
  if (isMobileMenu) {
    return (
      <>
        <animated.div
          style={StylesProps}
          className={styles.wrapper}
          id="content"
        >
          <div className={styles.closeMenu} onClick={handleMobileNav}>
            <CgClose className={styles.closeIcon} />
          </div>
          <div className={styles.mobileItem}>
            <div className={styles.items}>
              <div
                className={
                  pathname === "/" ? styles.active : styles.inactive
                }
                onClick={handleMobileNav}
              >
                <div className={styles.item}>
                  <Link href="/" className={styles.text}>
                    Home
                  </Link>
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
                  pathname === "/mobile-top" ? styles.active : styles.inactive
                }
              >
                <div className={styles.item}>
                  <Link href="/mobile-top" className={styles.text}>
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
          </div>
        </animated.div>
      </>
    );
  } else return null;
};

export default MobileNav;
