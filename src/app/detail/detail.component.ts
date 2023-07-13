import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WeatherService } from "./../services/weather.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  latitude: any = "";
  longitude: any = "";
  data: any = {};

  constructor(
    private membrService: WeatherService,
    private route: ActivatedRoute
  ) {}

  getThreeDaysWeatherAPI(latitude: any, longitude: any) {
    this.membrService
      .getThreeDaysApi(latitude, longitude)
      .subscribe((data: any) => {
        console.log("data=> ", data);
        this.data = data;
      });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.latitude = params.get("lat");
      this.longitude = params.get("lon");
      this.getThreeDaysWeatherAPI(this.latitude, this.longitude);
    });
  }
}
