import { Component } from "@angular/core";
import { WeatherService } from "./services/weather.service";

interface StationData {
  station?: any;
  lat?: any;
  lng?: any;
  lastUpdated?: any;
  data?: any;
  fourteenDays?: {
    data: any;
  };
  threeDays?: {
    data: any;
  };
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "weather";

  weatherForecastDailyList: any = [];
  lastupdated: any = "";

  stationsList: StationData[] = [
    {
      station: "Perth",
      lat: "20.2581",
      lng: "73.5057",
      lastUpdated: "",
      data: "",
      threeDays: {
        data: [],
      },
      fourteenDays: {
        data: [],
      },
    },
    {
      station: "Sydney",
      lat: "33.8688",
      lng: "151.2093",
      lastUpdated: "",
      data: "",
      threeDays: {
        data: [],
      },
      fourteenDays: {
        data: [],
      },
    },
  ];

  constructor(private membrService: WeatherService) {
    for (let index = 0; index < this.stationsList.length; index++) {
      this.getDailyWeatherAPI(index);
      this.getThreeDaysAPI(index);
      this.getFourteenDaysAPI(index);
    }

    console.log(this.stationsList);
  }

  getDailyWeatherAPI(index: any) {
    this.membrService
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
  getThreeDaysAPI(index: any) {
    this.membrService
      .getThreeDaysApi(
        this.stationsList[index].lat,
        this.stationsList[index].lng
      )
      .subscribe(
        (data: any) => {
          this.stationsList[index].threeDays = data;
        },
        (error) => {
          console.log(JSON.stringify(error));
          return [];
        }
      );
  }
  getFourteenDaysAPI(index: any) {
    this.membrService
      .getFourteenDaysApi(
        this.stationsList[index].lat,
        this.stationsList[index].lng
      )
      .subscribe(
        (data: any) => {
          this.stationsList[index].fourteenDays = data;
        },
        (error) => {
          console.log(JSON.stringify(error));
          return [];
        }
      );
  }
}
