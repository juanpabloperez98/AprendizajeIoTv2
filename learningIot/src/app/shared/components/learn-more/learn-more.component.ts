import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.scss'],
})
export class LearnMoreComponent implements OnInit {
  constructor() {}

  @Input()
  public url: string = '';

  ngOnInit(): void {}
}
