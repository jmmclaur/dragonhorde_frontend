/*if new doesn't work, use this
function WeatherCard({}) {
  return <div>WeatherCard</div>;
}

export default WeatherCard; */

import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../utils/contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const weatherOption = weatherOptions.find((item) => {
    return (
      item.day === weatherData.isDay && item.condition === weatherData.condition
    );
  });

  const link =
    weatherOption?.url ||
    (weatherData.isDay
      ? defaultWeatherOptions.day.url
      : defaultWeatherOptions.night.url);

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTemperatureUnit === "F"
          ? `${weatherData.temp.F}°F`
          : `${weatherData.temp.C}°C`}
      </p>
      <img
        src={link}
        alt={weatherOption?.condition || "default"}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
