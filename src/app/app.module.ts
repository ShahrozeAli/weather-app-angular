import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { WeatherInterceptor } from "./interceptors/weather.interceptor";
import { HighchartsChartModule } from "highcharts-angular";
import { NzTableModule } from "ng-zorro-antd/table";
import { WindSpeedChartComponent } from "./wind-speed-chart/wind-speed-chart.component";

@NgModule({
  declarations: [AppComponent, WindSpeedChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    NzTableModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
