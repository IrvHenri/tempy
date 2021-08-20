import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SelectMenu from "./components/SelectMenu";

function App() {
  const [cityData, setCityData] = useState([]);
  const [cityId, setCityId] = useState("");
  const [cityWeatherData, setCityWeatherData] = useState({});

  const handleChange = (event) => {
    setCityId(event.target.value);
  };

  useEffect(() => {
    if (cityId) {
      axios
        .get(`/api/cities/${cityId}/weather-data`)
        .then((response) => {
          setCityWeatherData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cityId]);

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
  return (
    <div className="App">
      <h1>WEATHER RADAR</h1>
      <SelectMenu
        cityData={cityData}
        cityId={cityId}
        handleChange={handleChange}
      />

      {cityId && <p>testing bro</p>}
    </div>
  );
}

export default App;
