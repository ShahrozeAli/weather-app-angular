import { Component } from "@angular/core";
import { WeatherService } from "../../../data/services/weather.service";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  stationsList: any = [
    {
      station: "Perth",
      lat: "20.2581",
      lng: "73.5057",
      lastUpdated: "",
      data: "",
    },
    {
      station: "Sydney",
      lat: "33.8688",
      lng: "151.2093",
      lastUpdated: "",
      data: "",
    },
  ];

  constructor(private weatherService: WeatherService, private router: Router) {
    for (let index = 0; index < this.stationsList.length; index++) {
      this.getDailyWeatherAPI(index);
    }

    console.log(this.stationsList);
  }

  getDailyWeatherAPI(index: any) {
    this.weatherService
      .getDailyWeatherApi(
        this.stationsList[index].lat,
        this.stationsList[index].lng
      )
      .subscribe(
        (data: any) => {
          this.stationsList[index].lastUpdated = data.run;
          this.stationsList[index].data = data.data[0];
        },
        (error) => {
          console.log(JSON.stringify(error));
          return [];
        }
      );
  }

  navigateToRouteWithParams(lat: string, lon: string) {
    const queryParams: NavigationExtras = {
      queryParams: {lat, lon},
    };

    this.router.navigate(["/details"], queryParams).then();
  }
}
