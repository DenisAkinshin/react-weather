import React from "react";
import { useEffect, useState } from "react";
import {useFetching} from './hooks/useFetching.js'
import WeatherService from './API/WeatherService'
import NavBar from './NavBar'
import MyCalendar from "./MyCalendar";
import MyLoader from "./UI/loader/MyLoader.jsx";


const MyMain = () => {

  const [city, setCity] = useState({town:'Moscow', country:'RU'})
  const [weather, setWeather] = useState('')

  const [fetching, loading, error] = useFetching( async () => {
    const response =  WeatherService.getWeather(city.town)
      .then(item => {
        setCity({...city, country:item.data.sys.country})
        return WeatherService.getWeatherOfWeek(item.data.coord.lat, item.data.coord.lon)
      })
      .then(item => {
        setWeather(item.data.daily)
      })
    return response
  })


  useEffect(() => {
    fetching() 
  }, [city.town])

  const onChangeCity = (value) => {
    setCity({...city, town:value})
  }

  return (
    <div className="main" >
        {weather ?
          <div style={{display:'flex'}}>
          <NavBar
            onChangeCity = {onChangeCity}
            today={weather[0]}
            town={city.town}
            country = {city.country}
            loading={loading}
            error={error}
          />
          <MyCalendar
            weatherData={weather.slice(1)}
          /> 
          </div> :
          <div className="main__loader">
              <MyLoader/>
          </div>
        }     

    </div>
  );
}

export default MyMain;