import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulacion-agricola',
  templateUrl: './simulacion-agricola.component.html',
  styleUrls: ['./simulacion-agricola.component.scss']
})
export class SimulacionAgricolaComponent implements OnInit {


  @Input() Berenjena: boolean = false;
  @Input() Berenjena1: boolean = false;
  @Input() Berenjena2: boolean = false;
  @Input() Berenjena21: boolean = false;

  @Input() Flor1: boolean = false;
  @Input() Flor12: boolean = false;
  @Input() Flor2: boolean = false;
  @Input() Flor21: boolean = false;

  @Input() Zanaoria1: boolean = false;
  @Input() Zanaoria11: boolean = false;
  @Input() Zanaoria2: boolean = false;
  @Input() Zanaoria21: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

}
