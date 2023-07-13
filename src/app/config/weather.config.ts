import { API } from "./config";

export const WeatherEndpoints = {
  DAILY_WEATHER: API.BASE_URL + API.environment + "/index.php/weather/daily",
  THREE_DAYS: API.BASE_URL + API.environment + "/index.php/weather/threeday",
  FOURTEEN_DAYS:
    API.BASE_URL + API.environment + "/index.php/weather/forteenday",
};
