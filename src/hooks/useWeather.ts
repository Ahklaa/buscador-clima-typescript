import { Search } from "../types"
import axios from "axios" 
export default function useWeather() {
    const fetchWeather = async (search : Search) => {
        
       try {
            const apiKeyWeather = "750e132d736f0f4628e8d357ad8332ed"
            
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
