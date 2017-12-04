import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UtilsProvider } from '../providers/utils/utils';

@Injectable()
export class KeyInterceptor implements HttpInterceptor {

  constructor(private utils: UtilsProvider) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const placeReq = req.clone({
      params: req.params.set('key', this.utils.apiKey)
    });

    return next.handle(placeReq);
  }
}
