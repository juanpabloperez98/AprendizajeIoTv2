import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  QUESTION_PATH = "/redes/questions";
  constructor() { }

  ngOnInit(): void {
  }

}
