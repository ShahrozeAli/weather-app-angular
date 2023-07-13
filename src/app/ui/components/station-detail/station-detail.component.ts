import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../../data/services/weather.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.scss']
})
export class StationDetailComponent implements OnInit {
  latitude: any = "";
  longitude: any = "";
  data: any = {};

  constructor(
      private weatherService: WeatherService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.latitude = params.get("lat");
      this.longitude = params.get("lon");
      this.getThreeDaysWeatherAPI(this.latitude, this.longitude);
    });
  }

  getThreeDaysWeatherAPI(latitude: any, longitude: any) {
    this.weatherService
        .getThreeDaysApi(latitude, longitude)
        .subscribe((data: any) => {
          console.log("data=> ", data);
          this.data = data;
        });
  }
}
