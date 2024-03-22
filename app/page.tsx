"use client";

import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResultDisplay from "./components/ResultDisplay";
import fetchNameInsights from "./api/fetchNameInsights";
import withLoadingAndError from "./hoc/WithLoadingAndError";
import { Country } from "./interfaces/common";

const HomePage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [country, setCountry] = useState<Country[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = async (name: string) => {
    // Change handleSubmit signature
    setLoading(true);
    setError(null);

    try {
      const { age, gender, country } = await fetchNameInsights(name);
      setAge(age);
      setGender(gender);
      setCountry(country);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleReset = () => {
    setName("");
    setAge(age);
    setGender(gender);
    setCountry(country);
  };

  return (
    <div>
      <InputForm name={name} setName={setName} onSubmit={handleSubmit} />
      <ResultDisplay
        age={age}
        gender={gender}
        country={country}
        handleReset={handleReset}
      />
    </div>
  );
};

export default withLoadingAndError(HomePage);
