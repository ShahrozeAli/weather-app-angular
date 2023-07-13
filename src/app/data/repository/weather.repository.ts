import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {WeatherEndpoints} from "../config/weather.config";

@Injectable({
    providedIn: "root",
})
export class WeatherRepository {
    constructor(private http: HttpClient) {
    }

    getDailyWeather(lat: string, lng: string): Observable<any> {
        const params = {lat: lat, lng: lng};
        return this.http.get(WeatherEndpoints.DAILY_WEATHER, {params});
    }

    getThreeDays(lat: string, lng: string): Observable<any> {
        const params = {lat: lat, lng: lng};
        return this.http.get(WeatherEndpoints.THREE_DAYS, {params});
    }

    getFourteenDays(lat: string, lng: string): Observable<any> {
        const params = {lat: lat, lng: lng};
        return this.http.get(WeatherEndpoints.FOURTEEN_DAYS, {params});
    }
}
