import "./app.css";
import ToDo from "./components/ToDo";
import LocationFinderServer from "./components/LocationFinderServer";
import LocationFinderClient from "./components/LocationFinderClient";
import WeatherInfoServer from "./components/WeatherInfoServer";
import WeatherInfoClient from "./components/WeatherInfoClient";


export default function App() {
    


  return (
    <main>
              
      <LocationFinderClient />
      <WeatherInfoClient />      
      <LocationFinderServer />
      <WeatherInfoServer />
      <ToDo/>
      
    </main>
  );
}
