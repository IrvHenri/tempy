import React from "react";
import * as cityProfileHelpers from "../helpers/CityProfileHelpers";

const CityWeatherProfile = (props) => {
  const { weather, main, wind, toggle, isToggled } = props;
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
        <button onClick={toggle}>See Forecast</button>
      ) : (
        <button onClick={toggle}>Close</button>
      )}
      {isToggled && <p>I'm a table</p>}
    </div>
  );
};

export default CityWeatherProfile;
