const axios = require("axios");

exports.getWeatherData = (req, res, next) => {
  const { id } = req.params;
  let currentWeatherData = `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.API_KEY}`;
  let forecastWeatherData = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.API_KEY}`;
  const requestOne = axios.get(currentWeatherData);
  const requestTwo = axios.get(forecastWeatherData);

  axios
    .all([requestOne, requestTwo])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data;
        const responseTwo = responses[1].data;
        res.json({
          currentWeatherData: responseOne,
          forecastWeatherData: responseTwo,
        });
      })
    )
    .catch((errors) => {
      res.status(404).send(errors.response.data.message);
    });
};
