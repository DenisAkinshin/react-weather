import React from "react";
import MyForm from "./UI/form/MyForm";
import MyCardWeather from "./UI/card/MyCardWeather";
import MyLoader from "./UI/loader/MyLoader";


const NavBar = ({today, onChangeCity, town, country, loading, error}) => {

    return (
        <div className="navbar">
            <div className="navbar__form">
                <MyForm
                    onChange={onChangeCity}
                />
            </div>
            {error && 
                <h1>Прозошла ошибка {error}, проверьте название города</h1>
            }
            {loading
                ? <MyLoader/>
                : <MyCardWeather
                    typeWeather={today.weather[0].main}
                    city={town}
                    temperature={today.temp.day} 
                    country={country}     
                    time={today.dt}           
                />
            }
            <hr style={{margin:'20px 0px 20px 0px'}}></hr>
            <p className="navbar__description">
                <span className="navbar__span">Feels like:</span>  {Math.ceil(today.feels_like.day-273)} °С
            </p>
            <p className="navbar__description">
                <span className="navbar__span">Description:</span> {today.weather[0].description}
            </p>
        </div>
    )
}

export default NavBar;