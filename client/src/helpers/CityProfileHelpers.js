import { fromUnixTime, format } from "date-fns";

//Convert Kelvin to C
export const temperatureConversion = (kelvin) => {
  return `${(kelvin - 273.15).toFixed()} °C`;
};

export const temperatureConversionMinMax = (kelvin) => {
  return `${(kelvin - 273.15).toFixed(2)} °C`;
};

export const windSpeedConversion = (wind) => {
  return `Wind ${wind.toFixed()} m/sec`;
};

export const windSpeedConversionTableCell = (wind) => {
  return `${wind.toFixed()} m/sec`;
};

export const convertDate = (timeString) => {
  return format(new Date(timeString), "dd MMM ha");
};