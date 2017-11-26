import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PlacesDataProvider {

  constructor(public http: HttpClient) { }
}
