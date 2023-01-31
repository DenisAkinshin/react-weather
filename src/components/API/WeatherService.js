import axios from "axios";


export default class WeatherService {
    static async getWeather (city) {
        const response = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ebc0d07fcac11cdb0d052a5734526757`)
        return response
   }

   static async getWeatherOfWeek (lat, lon) {
        const part = 'minute,hourly'
        const response = axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=ebc0d07fcac11cdb0d052a5734526757`)
        return response
    }
}