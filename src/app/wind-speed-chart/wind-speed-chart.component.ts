import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import { WeatherService } from "../services/weather.service";

@Component({
  selector: "app-wind-speed-chart",
  templateUrl: "./wind-speed-chart.component.html",
  styleUrls: ["./wind-speed-chart.component.scss"],
})
export class WindSpeedChartComponent implements OnInit {
  @Input("stationList") station: any = {};
  data: any = {};

  dataPointsWind: any[] = [];
  dataPointsGust: any[] = [];
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Wind Speed",
      align: "center",
    },
    series: [
      {
        type: "line",
        data: this.dataPointsWind,
        name: "Avg Speed",
      },
    ],
  };

  constructor(private membrService: WeatherService) {}

  createDataArray(data: any[]) {
    this.dataPointsWind = data.map((el) => {
      return {
        x: new Date(el.dateTime),
        y: el.windSpeed,
      };
    });
    this.dataPointsGust = data.map((el) => {
      return {
        x: new Date(el.dateTime),
        y: el.windGust,
      };
    });

    this.chartOptions = {
      title: {
        text: "Wind Speed",
        align: "center",
      },
      series: [
        {
          type: "line",
          data: this.dataPointsWind,
          name: "Avg Speed",
        },
        {
          type: "line",
          data: this.dataPointsGust,
          name: "Gust Speed",
        },
      ],
    };
  }

  ngOnInit(): void {
    this.data = this.station;
    this.createDataArray(this.data.data);
  }
}
