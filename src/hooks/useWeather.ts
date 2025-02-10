import { Search } from "../types"
import axios from "axios" 
export default function useWeather() {
    const fetchWeather = async (search : Search) => {
        
       try {
            const apiKeyWeather =  import.meta.env.VITE_API_KEY
            
            const urlCurrentData = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKeyWeather}`
            
            const {data} = await axios.get(urlCurrentData)
            console.log(data);
       } catch (error) {
            console.log(error);
       }
        
    }
    
    return {
        fetchWeather
    }
}
