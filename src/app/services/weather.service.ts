import { Injectable } from "@angular/core";
import { WeatherRepository } from "../repository/weather.repository";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private weatherRepository: WeatherRepository) {}

  getDailyWeatherApi(lat: any, lng: any) {
    return this.weatherRepository.getDailyWeather(lat, lng);
  }
  getThreeDaysApi(lat: any, lng: any) {
    return this.weatherRepository.getThreeDays(lat, lng);
  }
  getFourteenDaysApi(lat: any, lng: any) {
    return this.weatherRepository.getFourteenDays(lat, lng);
  }
}
