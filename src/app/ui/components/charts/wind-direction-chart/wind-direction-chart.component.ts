import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import { WeatherService } from "../../../../data/services/weather.service";

@Component({
  selector: "app-wind-direction-chart",
  templateUrl: "./wind-direction-chart.component.html",
  styleUrls: ["./wind-direction-chart.component.scss"],
})
export class WindDirectionChartComponent {
  @Input("stationList") station: any = {};
  data: any = {};

  dataPoints: any[] = [];
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Wind Direction",
      align: "center",
    },
    yAxis: {
      title: {
        text: "Wind Direction",
      },
      // labels: {
      //   formatter: function () {
      //     const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
      //     return directions[this.value];
      //   },
      // },
    },
    series: [
      {
        type: "line",
        data: this.dataPoints,
        name: "Wind Direction",
      },
    ],
  };

  constructor(private weatherService: WeatherService) {}

  createDataArray(data: any[]) {
    this.dataPoints = data.map((el) => {
      return {
        x: new Date(el.dateTime),
        y: el.windDirection,
      };
    });

    this.chartOptions = {
      title: {
        text: "Wind Direction",
        align: "center",
      },
      yAxis: {
        title: {
          text: "Wind Direction",
        },
        // labels: {
        //   formatter: function () {
        //     const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        //     return directions[this.value];
        //   },
        // },
      },
      series: [
        {
          type: "line",
          data: this.dataPoints,
          name: "Wind Direction",
        },
      ],
    };
  }

  ngOnInit(): void {
    this.data = this.station;
    this.createDataArray(this.data.data);
  }
}
