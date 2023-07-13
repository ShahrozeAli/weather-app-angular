import { Injectable } from "@angular/core";
import { WeatherRepository } from "../repository/weather.repository";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private weatherRepository: WeatherRepository) {}

  getDailyWeatherApi(lat: string, lng: string) {
    return this.weatherRepository.getDailyWeather(lat, lng);
  }
  getThreeDaysApi(lat: string, lng: string) {
    return this.weatherRepository.getThreeDays(lat, lng);
  }
  getFourteenDaysApi(lat: string, lng: string) {
    return this.weatherRepository.getFourteenDays(lat, lng);
  }
}
