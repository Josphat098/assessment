# WEATHER DASHBOARD
This is a REACT applucation that fetches and displays current weather conditions and a 3-day forecast for any city using the <strong>WeatherAPI</strong>

## Features
Search for any city and get:
1. Current temperature, condition and wind speed.
2. "Feels like' temperatures.
3. next forecast.

## Technologies used
1. React.js
2. Axios for HTTPS reaquests.
3. WeatherAPI(https://www.weatherapi.com/)
4. CSS for responsive design.

## Set up Instructions
1. Clone the repository
    git clone https://github.com/yourusername/weather-dashboard.git

    cd weather-dashboard

2. Install dependencies
    npm install

3. Get a free WeatherAPI key
    Go to https://www.weatherapi.com/
    Sign up and get your api key.

4. Replace the API key
    In App.js, replace this line:
    (const API_KEY = "your_api_key_here";)

5. Start the development server
    npm start
    The app will be available at: http://localhost:3000

## Responsive Design
I used flexbox and media queries to adapt the layout to:
    1. Phones(input stacks vertically)
    2. Tablets(forecast cards stack with margin)
    3. Desktops(forecast displayed in a row)

## Implementation Notes
Component structure:
    1. App.js: main logic and layout
    2. LocationInput.js: form to enter city name
    3. CurrentWeather.js: displays current weather
    4. ForecastWeather.js: displays next forecast.
State management via useState
Error handling: shows alert if the city is not found.
WeatherAPI integration: uses the forecast.json endpoint.
Styling: clean custom css in styles.css with responsiveness built-in.

## LICENSE
This project is open-source and free to use under the MIT License


