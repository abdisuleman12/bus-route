import { Component, OnInit } from '@angular/core';
import { MetroApiService } from '../metroapi.service';
import { Route } from '../route';

@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss']
})
export class BusRouteComponent implements OnInit {

  routes: Route[] = [];
  busStop: string = '';
  direction: string = '';


  constructor (private metro: MetroApiService) {}

  ngOnInit() {
    this.metro.getRoutes()
        .subscribe(data => this.routes = data)
    
  }

}
