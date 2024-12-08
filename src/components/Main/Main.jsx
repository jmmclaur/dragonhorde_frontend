import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../../utils/contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function Main({
  weatherData,
  handleCardClick,
  onCardLike,
  updateDefaultDragonItems,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <p className="cards__text">
        {currentTemperatureUnit === "F"
          ? `${weatherData.temp.F}°F Beware! Possible Dragon Sightings`
          : `${weatherData.temp.C}°C Beware! Possible Dragon Sightings`}
      </p>
      <section className="cards">
        <ul className="cards__list column">
          {updateDefaultDragonItems
            ?.filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id || item.id}
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
