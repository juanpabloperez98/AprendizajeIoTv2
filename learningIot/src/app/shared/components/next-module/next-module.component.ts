import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-module',
  templateUrl: './next-module.component.html',
  styleUrls: ['./next-module.component.scss'],
})
export class NextModuleComponent implements OnInit {
  @Input() route: string = '';

  constructor() {}

  ngOnInit(): void {}
}
