"use client";

import { useState } from "react";
import axios from "axios";
import { PlaceholdersAndVanishInput } from "./input";
import api from "../../../src/api";

export function PlaceholdersAndVanishInputDemo() {
  const [carName, setCarName] = useState(""); // Add state

  const placeholders = [
    "BMW",
    "Mercedes",
    "Lamborghini",
    "Bugatti",
    "McLaren",
  ];

  const handleChange = (e) => {
    setCarName(e.target.value); // Update state
    console.log(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/cars", {
        name: carName,
      });
      console.log(carName, response.data);
    } catch (error) {
      console.error("Error submitting car:", error);
    }
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2
        className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Enter Your Favourite Car
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        value={carName}
      />
    </div>
  );
}