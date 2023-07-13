import {Component, Input, OnChanges} from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-wind-speed-chart",
  templateUrl: "./wind-speed-chart.component.html",
  styleUrls: ["./wind-speed-chart.component.scss"],
})
export class WindSpeedChartComponent implements OnChanges {
  @Input("stationList") stationDetail: any = {};
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Wind Speed",
      align: "center",
    },
    series: [
      {
        type: "line",
        data: [],
        name: "Avg Speed",
      },
    ],
  };

  constructor() {}

  ngOnChanges() {
    this.generateGraphData(this.stationDetail.data);
  }

  generateGraphData(data: any[]) {
    let dataPointsWind: any[] = data.map((el) => {
      return {
        x: new Date(el.dateTime),
        y: el.windSpeed,
      };
    });
    let dataPointsGust: any[] = data.map((el) => {
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
          data: dataPointsWind,
          name: "Avg Speed",
        },
        {
          type: "line",
          data: dataPointsGust,
          name: "Gust Speed",
        },
      ],
    };
  }
}
