import React, {useState} from "react";
import LocationInput from "./components/LocationInput";
import CurrentWeather from "./components/CurrentWeather";
import axios from "axios";

function App() {
  const[weather, setWeather] = useState(null);

  const API_KEY = "212c0bab6ecd4524b82201131252004";

  const handleSubmit = async (cityName) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=n`
      );
      setWeather(res.data);
    } catch (err) {
      setWeather(null);
      alert("City not found. Please try again");
    }
  };
  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <LocationInput onSubmit = {handleSubmit}/>
      <CurrentWeather weather = {weather}/>
    </div>
  );
}

export default App;
