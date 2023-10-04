import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-button-go-back',
  templateUrl: './button-go-back.component.html',
  styleUrls: ['./button-go-back.component.scss']
})
export class ButtonGoBackComponent implements OnInit {


  @Input() lastSection: boolean = false;

  public direct: string = "#"

  constructor() { }

  ngOnInit(): void {
    if(this.lastSection){
      this.direct = '/aplicaciones/main'
    }
  }

}
