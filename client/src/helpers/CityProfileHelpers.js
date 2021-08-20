//Convert Kelvin to C
export const temperatureConversion = (kelvin) => {
  return `${(kelvin - 273.15).toFixed()} °C`;
};

export const windSpeedConversion = (wind) => {
  return `Wind ${wind.toFixed()} m/sec`;
};
