import React, { FC, ReactNode } from "react";
import styles from "./Main.module.css";

interface IMain {
  children: ReactNode;
}

const Main: FC<IMain> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
