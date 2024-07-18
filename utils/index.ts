const fetch = require("node-fetch");

export async function fetchCars() {
  const headers = {
    // insert keys here
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;