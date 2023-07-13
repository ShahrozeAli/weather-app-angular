import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import { WeatherService } from "../services/weather.service";

@Component({
  selector: "app-temp-chart",
  templateUrl: "./temp-chart.component.html",
  styleUrls: ["./temp-chart.component.scss"],
})
export class TempChartComponent implements OnInit {
  @Input("stationList") station: any = {};
  data: any = {};

  dataPointsMinTemp: any[] = [];
  dataPointsMaxTemp: any[] = [];
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Temperature",
      align: "center",
    },
    series: [
      {
        type: "line",
        data: this.dataPointsMinTemp,
        name: "Min Temp",
      },
      {
        type: "line",
        data: this.dataPointsMaxTemp,
        name: "Max Temp",
      },
    ],
  };

  constructor(private membrService: WeatherService) {}

  createDataArray(data: any[]) {
    this.dataPointsMinTemp = data.map((el) => {
      return {
        x: new Date(el.dateTime),
        y: el.tempMin,
      };
    });
    this.dataPointsMaxTemp = data.map((el) => {
      return {
        x: new Date(el.dateTime),
        y: el.tempMax,
      };
    });

    this.chartOptions = {
      title: {
        text: "Temperature",
        align: "center",
      },
      series: [
        {
          type: "line",
          data: this.dataPointsMinTemp,
          name: "Min Temp",
        },
        {
          type: "line",
          data: this.dataPointsMaxTemp,
          name: "Max Temp",
        },
      ],
    };
  }

  ngOnInit(): void {
    this.data = this.station;
    this.createDataArray(this.data.data);
  }
}
