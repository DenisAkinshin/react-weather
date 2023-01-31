import React from "react";
import MyCalendarCard from "./UI/calendarCard/MyCalendarCard";

const MyCalendar = ({weatherData}) => {
    return (
        <div className="myCalendar">
            {weatherData.map( (item, index) =>
            <MyCalendarCard
                key={index}
                time={item.dt}
                typeWeather={item.weather[0].main}
                temperature={item.temp.day}
                feelsLike={item.feels_like.day}
            />)}
        </div>
    )
}

export default MyCalendar;