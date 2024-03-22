import axios from "axios";
import { ICountry } from "../interfaces/common";

interface NameInsights {
  age: number | null;
  gender: string | null;
  country: ICountry[] | null;
}

const fetchNameInsights = async (name: string): Promise<NameInsights> => {
  return {
    age: 31,
    gender: "male",
    country: [
      { country_id: "BD", probability: 0.39273515280123705 },
      { country_id: "NP", probability: 0.3004132906144831 },
      { country_id: "IN", probability: 0.1966362457283266 },
      { country_id: "AE", probability: 0.013382520721044263 },
      { country_id: "QA", probability: 0.009690751310144616 },
    ],
  };
  try {
    // Make API calls to fetch age, gender, and country
    const ageResponse = await axios.get(`https://api.agify.io?name=${name}`);
    const genderResponse = await axios.get(
      ` https://api.genderize.io?name=${name}`
    );
    const countryResponse = await axios.get(
      `  https://api.nationalize.io?name=${name}`
    );

    const age = ageResponse.data.age;
    const gender = genderResponse.data.gender;
    const country = countryResponse.data.country;

    return { age, gender, country };
  } catch (error:any) {
    console.error("Error fetching name insights:", error);
    throw new Error(error?.response?.data?.error);
  }
};

export default fetchNameInsights;
