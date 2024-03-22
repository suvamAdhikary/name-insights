import React, { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Name Insights</h1>
      <nav className={styles.nav}></nav>
    </header>
  );
};

export default Header;
