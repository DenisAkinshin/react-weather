import React, { useState } from "react";
import cl from './MyCardWeather.module.css'
import cloud from '../../../assets/cloud.png'
import rain from '../../../assets/rain.png'
import snow from '../../../assets/snow.png'
import sun from '../../../assets/солнце.png'

import { useDataTime } from "../../hooks/useDataTime";


const MyCardWeather = ({city, temperature, country, time, typeWeather}) => {
    
    const [day, hours, minutes] = useDataTime(time)
      

    return (
        <div className={cl.card__wrapper}>
            {typeWeather === 'Clouds' ?
                <img src={cloud} className={cl.card__img}/> :
                typeWeather === 'Snow' ?
                <img src={snow} className={cl.card__img}/> :
                typeWeather === 'Rain' ?
                <img src={rain} className={cl.card__img}/> :
                <img src={sun} className={cl.card__img}/> 
            }
            
           
            <div className={cl.text__wrapper}>
                <h2 className={cl.text}>{Math.ceil(temperature-273)} °С</h2>
                <h3 className={cl.text}>{city}, {country}</h3>
                <p className={cl.time}>{day}, {hours}:{minutes<10 ? '0' + minutes: minutes}</p>
            </div>
        </div>
    )
}

export default MyCardWeather