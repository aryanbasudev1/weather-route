import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./searchBox.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { WeatherAtomFamily } from "../store/atoms";
function SearchBox() {
  const [city, setCity] = useState("");

  const inputCity = useRef(null);
  const weatherData = useRecoilValue(WeatherAtomFamily(city))

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
            <div id="weather-value">{weatherData?.main.temp}</div>
          </div>

          <div className="weather-card-item">
            <div id="weather-title">Main:</div>
            <div id="weather-value">{weatherData?.weather[0].main}</div>
          </div>

          <div className="weather-card-item">
            <div id="weather-title">Description:</div>
            <div id="weather-value">{weatherData?.weather[0].description}</div>
          </div>

          <div className="weather-card-item">
            <div id="weather-title">Humidity:</div>
            <div id="weather-value">{weatherData?.main.humidity}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
