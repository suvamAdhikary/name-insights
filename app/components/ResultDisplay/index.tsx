"use client";

import React, { FC, useState } from "react";
import styles from "./ResultDisplay.module.css";
import { ICountry } from "@/app/interfaces/common";

interface ResultDisplayProps {
  age: number | null;
  gender: string | null;
  country: ICountry[] | null;
  handleReset: () => void;
}

const ResultDisplay: FC<ResultDisplayProps> = ({ age, gender, country, handleReset }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleTryAgain = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === (country?.length || 0) - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClear = () => {
    handleReset();
    setCurrentIndex(0);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Name Insights</h2>
      {age === null && gender === null && country === null ? (
        <p className={styles.message}>Enter a name to get insights.</p>
      ) : (
        <div className={styles.results}>
          {age !== null && (
            <div className={styles.result}>
              <span className={styles.label}>Age:</span>
              <span className={styles.value}>{age}</span>
            </div>
          )}
          {gender !== null && (
            <div className={styles.result}>
              <span className={styles.label}>Gender:</span>
              <span className={styles.value}>{gender}</span>
            </div>
          )}
          {country !== null && country.length > 0 && (
            <div className={styles.result}>
              <span className={styles.label}>Country:</span>
              <span className={styles.value}>
                {country[currentIndex].country_id}
              </span>
            </div>
          )}
          <div className={styles.buttons}>
            <button className={styles.tryAgainButton} onClick={handleTryAgain}>
              Try Again
            </button>
            <button className={styles.clearButton} onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
