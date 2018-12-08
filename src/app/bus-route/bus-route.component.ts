import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss']
})
export class BusRouteComponent implements OnInit {

  route: string = '';
  busStop: string = '';
  direction: string = '';


  constructor() { }

  ngOnInit() {
  }

}
