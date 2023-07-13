import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";

import { Observable } from "rxjs/internal/Observable";


@Injectable()
export class WeatherInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
          "Content-Type": "application/json",
          "Accept": "application/json",
          'Vary':'Accept-Encoding',
          'Content-Encoding':'gzip',
          'Strict-Transport-Security':'max-age=86400',
          'Connection':'keep-alive',
          'Content-Length':'1045'
        },
      });
    return next.handle(request);
  }
}
