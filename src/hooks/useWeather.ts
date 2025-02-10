import { Search } from "../types"
import axios from "axios" 
import {z} from 'zod'
//TYPE GUARD AND ASSERTION
export default function useWeather() {
  /*  const isWeatherType = (weather : unknown) : weather is Weather => {

        return (
           Boolean(weather) && 
           typeof weather === "object" &&
           typeof (weather as Weather).name === "string" &&
           typeof (weather as Weather).main.temp === "number" &&
           typeof (weather as Weather).main.temp_max === "number" &&
           typeof (weather as Weather).main.temp_min === "number"
        )
   }
    */

   //ZOD
    const Weather = z.object({
        name : z.string(),
        main : z.object({
            temp: z.number(),
            temp_max: z.number(),
            temp_min : z.number()
        })
    })

    type Weather = z.infer<typeof Weather>

    const fetchWeather = async (search : Search) => {
       try {
            const apiKeyWeather =  import.meta.env.VITE_API_KEY
            
            const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKeyWeather}`
            
            const {data} = await axios.get(urlGeo)

            const lat  = data[0].lat
            const lon = data[0].lon
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeyWeather}`
            const {data:weatherData} = await  axios.get(urlWeather)
           /* const result = isWeatherType(weatherData)

            if (result){
                console.log(result);
                
            }else{
                console.log(result);
                
            }       
            */     
            
            //zod
            const result = Weather.safeParse(weatherData)
            if(result.success){
                console.log(result.data);
                
            }else {
                console.log("No se pudo obtener datos");
                
            }
       } catch (error) {
            console.log(error);
       }
        
    }
    
    return {
        fetchWeather
    }
}
