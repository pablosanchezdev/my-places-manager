import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Utils } from '../utils/utils';

@Injectable()
export class KeyInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const placeReq = req.clone({
      params: req.params.set('key', Utils.apiKey)
    });

    return next.handle(placeReq);
  }
}
