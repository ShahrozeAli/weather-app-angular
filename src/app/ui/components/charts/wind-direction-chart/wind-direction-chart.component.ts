import {Component, Input, OnChanges} from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-wind-direction-chart",
  templateUrl: "./wind-direction-chart.component.html",
  styleUrls: ["./wind-direction-chart.component.scss"],
})
export class WindDirectionChartComponent implements OnChanges {
  @Input("stationList") stationDetail: any = {};
  Highcharts: typeof Highcharts = Highcharts;

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
        data: [],
        name: "Wind Direction",
      },
    ],
  };

  constructor() {}

  ngOnChanges() {
    this.generateGraphData(this.stationDetail.data);
  }

  generateGraphData(data: any[]) {
    let dataPoints: any[] = data.map((el) => {
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
      },
      series: [
        {
          type: "line",
          data: dataPoints,
          name: "Wind Direction",
        },
      ],
    };
  }
}
