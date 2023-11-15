import HeaderSection from "./components/home/HeaderSection"
import LineChart from "./components/home/LIneChart";
import WeatherInfo from "./components/home/WeatherInfo"

function App() {

  return (
    <main>
      <HeaderSection />
      <WeatherInfo />
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
