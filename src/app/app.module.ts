import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { WeatherInterceptor } from "./interceptors/weather.interceptor";
import { HighchartsChartModule } from "highcharts-angular";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { DetailComponent } from "./detail/detail.component";
import { WindSpeedChartComponent } from './wind-speed-chart/wind-speed-chart.component';
import { TempChartComponent } from './temp-chart/temp-chart.component';
import { HomeComponent } from './home/home.component';
import { WindDirectionChartComponent } from './wind-direction-chart/wind-direction-chart.component';

@NgModule({
  declarations: [AppComponent, DetailComponent, WindSpeedChartComponent, TempChartComponent, HomeComponent, WindDirectionChartComponent],
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
