import React from "react";
import styles from "./LoadingIndicator.module.css";

const LoadingIndicator: React.FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingIndicator;
