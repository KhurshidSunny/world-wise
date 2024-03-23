/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const URL = `http://localhost:9000/`;

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function getCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}cities`);
        const data = await res.json();
        setIsLoading(false);
        setCities(data);
      } catch (err) {
        alert("there was an error loading data");
      }
    }
    getCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${URL}cities/${id}`);
      const data = await res.json();
      setIsLoading(false);
      setCurrentCity(data);
    } catch (err) {
      alert("there was an error loading data");
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("The Cities Context was used outside the Cities Provider");
  return context;
}

export { CitiesProvider, useCities };
