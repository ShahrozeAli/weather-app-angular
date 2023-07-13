import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import * as Highcharts from "highcharts";
import {WeatherService} from "../services/weather.service";

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
  @Input('stationList') station: StationData = {};
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

  constructor(private membrService: WeatherService) {
    this.getData();
  }

  getData() {
    this.membrService
        .getThreeDaysApi("20.2581","73.5057")
        .subscribe(
            (data: any) => {
              console.log('data', data);
              this.createDataArray(data.data);
            },
            (error) => {
              console.log(JSON.stringify(error));
              return [];
            }
        );
  }

  createDataArray(data: any[]) {
    // if (this.station?.threeDays?.data) {
      this.dataPointsWind = data.map((el) => {
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
    // }
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit(): void {
    // this.createDataArray();
  }
}
