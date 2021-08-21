import { useState, useEffect } from "react";
import axios from "axios";
const useCityWeatherData = (cityId) => {
  const [cityWeatherData, setCityWeatherData] = useState({
    currentWeatherData: {},
    forecastWeatherData: {},
  });
  useEffect(() => {
    if (cityId) {
      axios
        .get(`/api/cities/${cityId}/weather-data`)
        .then((response) => {
          const { currentWeatherData, forecastWeatherData } = response.data;
          setCityWeatherData({ currentWeatherData, forecastWeatherData });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cityId]);
  return [cityWeatherData];
};

export default useCityWeatherData;
