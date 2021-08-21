import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
  let imgURL =
    "https://user-images.githubusercontent.com/69181038/130332286-46abc8ac-3f70-405d-b822-3b0e124d1334.jpg";
  return (
    <div className="App">
      <Navbar />
      <main>
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
