import { Component, OnInit } from '@angular/core';
import { MetroApiService } from '../metroapi.service';

@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss']
})
export class BusRouteComponent implements OnInit {

  routes: any;
  busStop: string = '';
  direction: string = '';


  constructor
  (
    private metro: MetroApiService
  ) {}

  ngOnInit() {
    this.routes = this.metro.getRoutes().subscribe((response) => {
      console.log(response)
    })
  }

}
