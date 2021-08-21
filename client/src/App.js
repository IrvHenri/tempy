import { useState } from "react";
import "./App.css";
import SelectMenu from "./components/select-menu/SelectMenu";
import CityWeatherProfile from "./components/city-weather/CityWeatherProfile";
import useToggle from "./hooks/useToggle";
import useCityData from "./hooks/useCityData";
import useCityWeatherData from "./hooks/useCityWeatherData";
import tableDataHelper from "./helpers/TableDataHelper";

function App() {
  const [cityId, setCityId] = useState("");
  const [cityData] = useCityData();
  const [isToggled, toggle] = useToggle();
  const [cityWeatherData] = useCityWeatherData(cityId);
  const { currentWeatherData, forecastWeatherData } = cityWeatherData;

  let tableData = tableDataHelper(forecastWeatherData);
  // console.log("CITY FORECAST ---->", forecastWeatherData.list);
  // Issue with 5-day Forecast endpoint, 40 data points, 8 per day. but day data leaks into next day.

  const handleChange = (event) => {
    setCityId(event.target.value);
    if (isToggled) {
      toggle();
    }
  };

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
