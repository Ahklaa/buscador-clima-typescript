import { Search } from "../types";
import axios from "axios";
import { useState } from "react";
import { z } from "zod";

//ZOD
const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
});
export type Weather = z.infer<typeof Weather>;

export default function useWeather() {
  const [weather, setWeather] = useState<Weather>({
    name: "",
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
  });

  const fetchWeather = async (search: Search) => {
    try {
      const apiKeyWeather = import.meta.env.VITE_API_KEY;

      const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKeyWeather}`;

      const { data } = await axios.get(urlGeo);

      const lat = data[0].lat;
      const lon = data[0].lon;
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeyWeather}`;
      const { data: weatherData } = await axios.get(urlWeather);
      //zod
      const result = Weather.safeParse(weatherData);
      if (result.success) {
        setWeather(result.data);
      } else {
        console.log("No se pudo obtener datos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchWeather,
    weather,
  };
}
