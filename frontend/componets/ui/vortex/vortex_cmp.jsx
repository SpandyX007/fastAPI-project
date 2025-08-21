import React, { useEffect, useState } from "react";
import { Vortex } from "./vortex";
import { PlaceholdersAndVanishInputDemo } from '../input/input_cmp'
import axios from "axios";
import api from "../../../src/api";

export function VortexDemoSecond() {
  const [cars, setCars] = useState([]);

  // Fetch cars from backend
  const fetchCars = async () => {
    try {
      const response = await api.get("/cars");
      console.log(response)
      setCars(response.data.cars);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };
  return (
    <div
      className="w-[calc(100%)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          This is My Car Gallery
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]" onClick={fetchCars}>
            View List
          </button>
        </div>
        <div className="mt-8 w-full flex flex-col items-center">
          {cars.length === 0 ? (
            <p className="text-white">No cars found.</p>
          ) : (
            <ul className="text-white text-lg">
              {cars.map((car, idx) => (
                <li key={idx}>{car.name}</li>
              ))}
            </ul>
          )}
        </div>
        <PlaceholdersAndVanishInputDemo/>
      </Vortex>
    </div>
  );
}
