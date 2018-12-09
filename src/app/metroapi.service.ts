import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Route } from './classes/route'
import { Directions } from './classes/directions';
import { Stops } from './classes/stops';
import { Details } from './classes/details';

@Injectable({
  providedIn: 'root'
})
export class MetroApiService {

  constructor(private http: HttpClient) {}

  getRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>('http://svc.metrotransit.org/NexTrip/Routes');
  }

  getDirections(route: any): Observable<Directions[]> {
    return this.http.get<Directions[]>('http://svc.metrotransit.org/NexTrip/Directions/' + route)
  }

  getStops(direction: any, route: any): Observable<Stops[]> {
    return this.http.get<Stops[]>('http://svc.metrotransit.org/NexTrip/Stops/' + route + '/' + direction)
  }

  getArrivalTime(route, direction, stop): Observable<Details[]> {
    return this.http.get<Details[]>('http://svc.metrotransit.org/NexTrip/' + route + '/' + direction + '/' + stop)
  }
}
