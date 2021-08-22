# Tempy

A react application that allows users to select a city which displays the current weather and forecast for that selected city.




### Preview 

#### Home
<img width="500" alt="tempy home page" src="https://user-images.githubusercontent.com/69181038/130336966-248172e6-74c4-4c9d-b02b-278365ca1f29.png">


#### Select City
<img width="500" alt="select city search result" src="https://user-images.githubusercontent.com/69181038/130336992-39986048-0140-461b-841a-4ea87fa38962.png">

#### Expand City's Weather Forecast
<img width="500" alt="expand city forecast" src="https://user-images.githubusercontent.com/69181038/130336998-21425e83-9d8e-49df-9ca2-99df80289582.png">

#### API Endpoints

- [City Data](https://tempy-api.herokuapp.com/api/cities)

- [Toronto City Weather](https://tempy-api.herokuapp.com/api/cities/6167865/weather-data)


## Areas For Improvement

- Implement dynamic background image with geolocation ( à la The Weather Network)
- Fix client hosting issue regarding "Invalid Host header".   

## Tech Stack

- React
- Express
- Material-UI

## Get Started

1. Fork and clone this repository.
2. cd into server and install server dependencies with `npm install`. (Optional as client is now proxied to heroku server)
3. cd into client , run `yarn` to install dependencies then `yarn start` to start development server
4. Visit <http://localhost:3000/> in your browser.

## Client Dependencies

- axios: "^0.21.1",
- material-ui/core": "^4.12.3"
- date-fns: "^2.23.0",
- react: "^17.0.2",
- react-icons: "^4.2.0",
- react-scripts": "4.0.3"

## Server Dependencies

- axios: "^0.21.1",
- cors: "^2.8.5",
- debug: "~2.6.9",
- dotenv: "^10.0.0",
- express: "~4.16.1",
- morgan": "~1.9.1"
