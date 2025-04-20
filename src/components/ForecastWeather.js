import React from 'react'

const ForecastWeather = ({forecast}) => {

    if (!forecast || forecast.length === 0) return null;

    return (
        <div className="forecast-weather">
            <h2>Day Forecast</h2>
            <div>
                {forecast.map((day) => (
                    <div key={day.date}>
                        <h3>{day.date}</h3>
                        <img src={day.day.condition.icon} alt = "forecast icon" />
                        <p>{day.day.condition.text}</p>
                        <p>{day.day.maxtemp_c}</p>
                        <p>{day.day.mintemp_c}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ForecastWeather;