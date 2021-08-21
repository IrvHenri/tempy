import React from "react";
import * as cityProfileHelpers from "../../helpers/CityProfileHelpers";
import CityWeatherTable from "./CityWeatherTable";
import Button from "@material-ui/core/Button";
const CityWeatherProfile = (props) => {
  const { weather, main, wind, toggle, isToggled, tableData } = props;
  const mainDescription = weather && weather[0].main;
  const description = weather && weather[0].description;
  const temperature =
    weather && cityProfileHelpers.temperatureConversion(main.temp);
  const windSpeed = wind && cityProfileHelpers.windSpeedConversion(wind.speed);

  return (
    <div>
      <article>
        <h2>{mainDescription}</h2>
        <p>{description}</p>
      </article>
      <article>
        <h2>{temperature}</h2>
        <p>{windSpeed}</p>
      </article>
      {!isToggled ? (
        <Button onClick={toggle} variant="contained">
          See Forecast
        </Button>
      ) : (
        <Button onClick={toggle} variant="contained">
          Close
        </Button>
      )}
      {isToggled && <CityWeatherTable tableData={tableData} />}
    </div>
  );
};

export default CityWeatherProfile;
