import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SelectMenu from "./components/SelectMenu";
import CityWeatherProfile from "./components/CityWeatherProfile";
import useToggle from "./hooks/useToggle";

function App() {
  const [isToggled, toggle] = useToggle();
  const [cityData, setCityData] = useState([]);
  const [cityId, setCityId] = useState("");
  const [cityWeatherData, setCityWeatherData] = useState({
    currentWeatherData: {},
    forecastWeatherData: {},
  });

  const handleChange = (event) => {
    setCityId(event.target.value);
    if (isToggled) {
      toggle();
    }
  };

  useEffect(() => {
    axios
      .get("/api/cities")
      .then((response) => {
        setCityData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
  const { currentWeatherData, forecastWeatherData } = cityWeatherData;

  let forcastList = forecastWeatherData && forecastWeatherData.list;
  let tableData = [];
  let index = 0;

  if (forcastList) {
    while (index < forcastList.length) {
      let copiedForcastList = [...forcastList];
      tableData.push([copiedForcastList.splice(index, 8)]);
      index += 8;
    }
  }

  return (
    <div className="App">
      <h1>WEATHER RADAR</h1>
      <SelectMenu
        cityData={cityData}
        cityId={cityId}
        handleChange={handleChange}
      />

      {cityId && (
        <CityWeatherProfile
          {...currentWeatherData}
          isToggled={isToggled}
          toggle={toggle}
          tableData={tableData}
        />
      )}
    </div>
  );
}

export default App;
