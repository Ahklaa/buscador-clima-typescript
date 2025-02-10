import style from './App.module.css'
import Form from './components/Form/Form'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import useWeather from './hooks/useWeather'
function App() {
  const {fetchWeather, weather,isWeatherData} = useWeather()
  return (
    <>
     <h1 className={style.title}>Buscador de clima</h1>
     <div className={style.container}>
      <Form 
        fetchWeather = {fetchWeather}
      />
      {isWeatherData &&  <WeatherDetail weather = {weather} />}
     </div>
    </>
  )
}

export default App
