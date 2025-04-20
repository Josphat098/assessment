import React, {useState} from "react";
import LocationInput from "./components/LocationInput";
import CurrentWeather from "./components/CurrentWeather";
import axios from "axios";
import ForecastWeather from "./components/ForecastWeather";
import './App.css';

function App() {
  const[weather, setWeather] = useState(null);

  const API_KEY = "212c0bab6ecd4524b82201131252004";
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (cityName) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&aqi=n`
      );
      setWeather(res.data);
    } catch (err) {
      setWeather(null);
      alert("City not found. Please try again");
    }
    setLoading(false);
  };
  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <LocationInput onSubmit = {handleSubmit}/>
      {loading ? (
        <p>Loading...</p>
      ) : (
      <CurrentWeather weather = {weather}/>
      )}
      <ForecastWeather forecast={weather?.forecast?.forecastday}/>
    </div>
  );
}

export default App;
