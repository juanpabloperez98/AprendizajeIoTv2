import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Presentation-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  QUESTION_PATH = "/presentationTwo/questions";

  constructor() { }

  ngOnInit(): void {
  }

}
