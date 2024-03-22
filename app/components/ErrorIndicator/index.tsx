import React from "react";
import styles from "./ErrorIndicator.module.css";

interface ErrorIndicatorProps {
  error: Error | null;
}

const ErrorIndicator: React.FC<ErrorIndicatorProps> = ({ error }) => {
  return (
    <div className={styles.error}>
      <p>Error: {error?.message}</p>
    </div>
  );
};

export default ErrorIndicator;
