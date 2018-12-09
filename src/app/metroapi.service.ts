import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Route } from './route'

@Injectable({
  providedIn: 'root'
})
export class MetroApiService {

  constructor(private http: HttpClient) {}

  getRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>('http://svc.metrotransit.org/NexTrip/Routes');
  }
}
