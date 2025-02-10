import {Weather} from "../../hooks/useWeather"
type WeatherDetailProps = {
    weather : Weather
}
export default function WeatherDetail({weather} : WeatherDetailProps) {
  return (
    <div>{weather.name}</div>
  )
}
