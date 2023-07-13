import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { WeatherEndpoints } from "../config/weather.config";

@Injectable({
  providedIn: "root",
})
export class WeatherRepository {
  constructor(private http: HttpClient) {}

  getDailyWeather(lat: any, lng: any): Observable<any> {
    const params = { lat: lat, lng: lng };
    return this.http.get(WeatherEndpoints.DAILY_WEATHER, { params: params });
  }

  getThreeDays(lat: any, lng: any): Observable<any> {
    const params = { lat: lat, lng: lng };
    return this.http.get(WeatherEndpoints.THREE_DAYS, { params: params });
  }
  getFourteenDays(lat: any, lng: any): Observable<any> {
    const params = { lat: lat, lng: lng };
    return this.http.get(WeatherEndpoints.FOURTEEN_DAYS, { params: params });
  }
}
