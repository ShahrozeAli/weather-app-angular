import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import * as Highcharts from "highcharts";

interface StationData {
  threeDays?: {
    data: {
      dateTime: string;
      windSpeed: number;
    }[];
  };
}

@Component({
  selector: "app-wind-speed-chart",
  templateUrl: "./wind-speed-chart.component.html",
  styleUrls: ["./wind-speed-chart.component.scss"],
})
export class WindSpeedChartComponent implements OnInit, OnChanges {
  @Input() stationList: StationData = {};

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

  createDataArray() {
    console.log("this.stationList => ", this.stationList.threeDays);
    if (this.stationList?.threeDays?.data) {
      this.dataPointsWind = this.stationList.threeDays.data.map((el) => {
        return {
          x: new Date(el.dateTime),
          y: el.windSpeed,
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
        ],
      };

      console.log("dataPointsWind => ", this.dataPointsWind);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["stationList"]) {
      this.createDataArray();
    }
  }

  ngOnInit(): void {
    this.createDataArray();
  }
}
