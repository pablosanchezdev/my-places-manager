import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KeyInterceptor implements HttpInterceptor {

  apiKey: string = 'AIzaSyDs1o9mW-vhqMcBocjTQkZdGi5I2EXmt5I';

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const placeReq = req.clone({
      params: req.params.set('key', this.apiKey)
    });

    return next.handle(placeReq);
  }
}
