import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ROUTE_PATH_INTRODUCTION = "/introduccion/main";


  constructor() { }

  ngOnInit(): void {
  }

}
