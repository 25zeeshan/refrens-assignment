// Navigation.js

import React, { useState } from "react";
import styles from "./Navigation.module.css";

const Navigation = ({ changePage }) => {
  const [hasShadow, setHasShadow] = useState(false);

  const handleScroll = () => {
    const isTop = window.scrollY === 0;
    setHasShadow(!isTop);
  };

  //Adding shadow at the bottom of navigation bar on scroll
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navigation} ${hasShadow ? styles.shadow : ""}`}>
      <div className={styles.logo}>
        <img src="refrens-logo.png" alt="Logo" />
        <span className={styles.logoText}>Rick & Morty</span>
      </div>
      <div className={styles.navButtons}>
        <a href="/">Character</a>
      </div>
    </nav>
  );
};

export default Navigation;
