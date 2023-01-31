import React from "react";
import cloud from '../../../assets/cloud.png'
import rain from '../../../assets/rain.png'
import snow from '../../../assets/snow.png'
import sun from '../../../assets/солнце.png'
import { useDataTime } from "../../hooks/useDataTime";
import cl from './MyCalendarCard.module.css'

const MyCalendarCard = ({time, typeWeather, temperature, feelsLike}) => {

    const [day, hours, minute] = useDataTime(time)

    return (
        <div className={cl.card}>
            <h2 className={cl.title}>{day}</h2>
            {typeWeather === 'Clouds' ?
                <img src={cloud} className={cl.card__img}/> :
                typeWeather === 'Snow' ?
                <img src={snow} className={cl.card__img}/> :
                typeWeather === 'Rain' ?
                <img src={rain} className={cl.card__img}/> :
                <img src={sun} className={cl.card__img}/> 
            }
            <p className={cl.temp}>{Math.ceil(temperature-273)}°С <span>{Math.ceil(feelsLike-273)}°С</span></p>
        </div>
    )
}

export default MyCalendarCard;