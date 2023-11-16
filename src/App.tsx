import { useState } from "react";
import { FORECAST_API_url, WEATHER_API_kEY, WEATHER_API_url } from "./apis";
import HeaderSection from "./components/home/HeaderSection"
import LineChart from "./components/home/LIneChart";
import CurrentWeather from "./components/home/CurrentWeather";
import Forecast from "./components/home/Forecast";

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [forecastLoading, seForecastLoading] = useState(false);

  const handleOnSearchChange = (searchData: { value: string, label: string }) => {
    setWeatherLoading(true);
    seForecastLoading(true);

    const [lat, lon] = searchData.value.split(" ");
    fetch(
      `${WEATHER_API_url}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_kEY}&units=metric`
    ).then(res => res.json())
      .then(data => {
        setCurrentWeather({ ...data })
        setWeatherLoading(false);
      }
      )
    fetch(
      `${FORECAST_API_url}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_kEY}&units=metric`
    ).then(res => res.json())
      .then(data => {
        setForecast({ ...data })
        seForecastLoading(false);
      }
      )
  };
  return (
    <main>
      <HeaderSection onChange={handleOnSearchChange} />
      <div className="grid grid-cols-12 max-w-[1200px] mx-auto px-4 gap-4 mt-4">
        {(currentWeather || weatherLoading) && <CurrentWeather data={currentWeather} weatherLoading={weatherLoading} />}
        {(forecast || forecastLoading) && <Forecast data={forecast} forecastLoading={forecastLoading} />}
      </div>
      <div className="grid grid-cols-12  max-w-[1200px] mx-auto px-4 gap-4 mt-4">
        <div className="col-span-12 lg:col-span-7">
          <LineChart />
        </div>
        <div className="col-span-12 lg:col-span-5"></div>
      </div>
    </main>
  )
}

export default App
