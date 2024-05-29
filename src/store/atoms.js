import axios from 'axios';
import { atomFamily, selectorFamily } from 'recoil';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const WeatherAtomFamily = atomFamily({
  key: "WeatherAtomFamily",
  default: selectorFamily({
    key: 'WeatherAtom/selectorFamily',
    get: (city) => async () => {
      if (!city) return null;
      console.log('reached inside atom')
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        return res.data;
      } catch (error) {
        console.error("Error fetching weather data", error);
        return null;
      }
    },
  }),
});
