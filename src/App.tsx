import style from './App.module.css'
import Form from './components/Form/Form'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import useWeather from './hooks/useWeather'
function App() {
  const {fetchWeather, weather} = useWeather()
  return (
    <>
     <h1 className={style.title}>Buscador de clima</h1>
     <div className={style.container}>
      <Form 
        fetchWeather = {fetchWeather}
      />
      <WeatherDetail 
        weather = {weather}
      />
     </div>
    </>
  )
}

export default App
