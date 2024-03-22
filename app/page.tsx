"use client";

import React, { FC, useState } from "react";
import InputForm from "./components/InputForm";
import ResultDisplay from "./components/ResultDisplay";
import fetchNameInsights from "./api/fetchNameInsights";
import withLoadingAndError from "./hoc/WithLoadingAndError";
import { ICountry, ILoadingAndErrorProps } from "./interfaces/common";
import Skeleton from "./hoc/Skeleton";
import LoadingIndicator from "./components/LoadingIndicator";
import ErrorIndicator from "./components/ErrorIndicator";

const HomePage: FC<ILoadingAndErrorProps> = ({
  error,
  loading,
  handleLoading,
  handleError,
}) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [country, setCountry] = useState<ICountry[] | null>(null);

  const handleSubmit = async (name: string) => {
    handleLoading(true);
    handleError(null);

    try {
      const { age, gender, country } = await fetchNameInsights(name);
      setAge(age);
      setGender(gender);
      setCountry(country);
    } catch (err: any) {
      handleError(err);
    } finally {
      handleLoading(false);
    }
  };

  const handleReset = () => {
    setName("");
    setAge(null);
    setGender(null);
    setCountry(null);
  };

  return (
    <Skeleton>
      {loading && <LoadingIndicator />}
      {error && <ErrorIndicator error={error} />}
      {!loading && !error && (
        <>
          <InputForm name={name} setName={setName} onSubmit={handleSubmit} />
          <ResultDisplay
            age={age}
            gender={gender}
            country={country}
            handleReset={handleReset}
          />
        </>
      )}
    </Skeleton>
  );
};

export default withLoadingAndError(HomePage);
