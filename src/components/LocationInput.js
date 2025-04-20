import React, {useState} from 'react'

const LocationInput = ({onSubmit}) => {
    const[input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input) return;
        onSubmit(input);
        setInput("");
    }
return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder ="Enter location" value = {input} onChange= {(e) => setInput(e.target.value)}/>
        <button type="submit">Get weather</button>
    </form>
  );
};
export default LocationInput;