import {Component, Input, OnChanges} from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-temp-chart",
  templateUrl: "./temp-chart.component.html",
  styleUrls: ["./temp-chart.component.scss"],
})
export class TempChartComponent implements OnChanges {
  @Input("stationList") stationDetail: any = {};
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Temperature",
      align: "center",
    },
    series: [
      {
        type: "line",
        data: [],
        name: "Min Temp",
      },
      {
        type: "line",
        data: [],
        name: "Max Temp",
      },
    ],
  };

  constructor() {}

  ngOnChanges() {
    this.generateGraphData(this.stationDetail.data);
  }

  generateGraphData(data: any[]) {
    let dataPointsMinTemp: any[] = data.map((el) => {
      return {
        x: new Date(el.dateTime),
        y: el.tempMin,
      };
    });
    let dataPointsMaxTemp: any[] = data.map((el) => {
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
          data: dataPointsMinTemp,
          name: "Min Temp",
        },
        {
          type: "line",
          data: dataPointsMaxTemp,
          name: "Max Temp",
        },
      ],
    };
  }
}
