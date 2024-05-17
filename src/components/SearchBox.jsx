import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function SearchBox() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState();
  const inputCity = useRef(null);

  useEffect(() => {
    console.log("API HIT");
    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca872e9f2fe655d0497cddba27c83869`
        )
        .then((res) => {
          console.log(res.data);
          setTemp(res.data.main.temp);
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
    <div>
      <div>
        <input type="text" placeholder="Enter City" ref={inputCity} />

        <button onClick={handleOnClick}>Search</button>
        <div
          style={{
            color: "red",
          }}
        >
          Temp is:{temp}°C
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
