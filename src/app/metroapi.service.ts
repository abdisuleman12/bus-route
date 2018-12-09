import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MetroApiService {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {}

  getRoutes(): Observable<{}> {
    return this.http.get('http://svc.metrotransit.org/NexTrip/Routes')
  }
}
