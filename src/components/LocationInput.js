import React, {useState} from 'react'

const LocationInput = ({getWeather}) => {
    const[input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim()) {
            getWeather(input);
            setInput("");
        }
    }
return (
    <form onSubmit={handleSubmit} className="location-form">
        <input type="text" placeholder ="Enter location" value = {input} onChange= {(e) => setInput(e.target.value)}/>
        <button type="submit">Search</button>
    </form>
  );
};
export default LocationInput;