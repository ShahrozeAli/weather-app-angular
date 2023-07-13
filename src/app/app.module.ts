import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { WeatherInterceptor } from "./data/interceptors/weather.interceptor";
import { HighchartsChartModule } from "highcharts-angular";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { WindSpeedChartComponent } from './ui/components/charts/wind-speed-chart/wind-speed-chart.component';
import { TempChartComponent } from './ui/components/charts/temp-chart/temp-chart.component';
import { HomeComponent } from './ui/components/home/home.component';
import { WindDirectionChartComponent } from './ui/components/charts/wind-direction-chart/wind-direction-chart.component';
import { StationDetailComponent } from './ui/components/station-detail/station-detail.component';

@NgModule({
  declarations: [AppComponent, WindSpeedChartComponent, TempChartComponent, HomeComponent, WindDirectionChartComponent, StationDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    NzTableModule,
    NzTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
