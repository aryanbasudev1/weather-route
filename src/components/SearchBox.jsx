import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./searchBox.css";
function SearchBox() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState();
  const [main, setMain] = useState();
  const [description, setDescription] = useState();
  const [humidity, setHumidity] = useState();

  const inputCity = useRef(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    console.log("API HIT");
    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        )
        .then((res) => {
          console.log(res.data);
          setTemp(res.data.main.temp);
          setMain(res.data.weather[0].main);
          setDescription(res.data.weather[0].description);
          setHumidity(res.data.main.humidity);
        })
        .catch((error) => {
          console.error("Error Fetching city ", error);
        });
    }
  }, [city]);
  function handleOnClick() {
    setCity(inputCity.current.value);
    inputCity.current.value = "";
  }
  return (
    <div id="weather-card">
      <div id="card">
        <input
          type="text"
          id="search-box"
          placeholder="Enter City"
          ref={inputCity}
        />

        <button id="search-button" onClick={handleOnClick}>
          Search
        </button>
        <div id="weather-data">
          <div id="weather-card-item">
            <div id="weather-title">Temperature:</div>
            <div id="weather-value">{temp}</div>
          </div>

          <div className="weather-card-item">
            <div id="weather-title">Main:</div>
            <div id="weather-value">{main}</div>
          </div>

          <div className="weather-card-item">
            <div id="weather-title">Description:</div>
            <div id="weather-value">{description}</div>
          </div>

          <div className="weather-card-item">
            <div id="weather-title">Humidity:</div>
            <div id="weather-value">{humidity}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
