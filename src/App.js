
import LocationInput from "./components/LocationInput";


function App() {
  const getWeather = (city) => {
    console.log("fetching weaher for: ", city);
  }
  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <LocationInput getWeather={getWeather}/>
    </div>
  );
}

export default App;
