import React, { FC, ReactNode } from "react";
import styles from "./Skeleton.module.css";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";

interface SkeletonProps {
  children: ReactNode;
}

const Skeleton: FC<SkeletonProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Main>{children}</Main>
      <Footer version="1.0" />
    </div>
  );
};

export default Skeleton;
