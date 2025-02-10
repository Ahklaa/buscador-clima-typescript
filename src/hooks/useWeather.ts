import { Search } from "../types"
import axios from "axios" 
export default function useWeather() {
    const fetchWeather = async (search : Search) => {
        
       try {
            const apiKeyWeather =  import.meta.env.VITE_API_KEY
            
            const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKeyWeather}`
            
            const {data} = await axios.get(urlGeo)

            const lat  = data[0].lat
            const lon = data[0].lon
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeyWeather}`
            const {data:weatherData} = await  axios.get(urlWeather)
            console.log(weatherData);
            
            
       } catch (error) {
            console.log(error);
       }
        
    }
    
    return {
        fetchWeather
    }
}
