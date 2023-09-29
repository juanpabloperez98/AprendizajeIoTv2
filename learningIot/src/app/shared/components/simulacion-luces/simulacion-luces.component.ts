import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulacion-luces',
  templateUrl: './simulacion-luces.component.html',
  styleUrls: ['./simulacion-luces.component.scss']
})


export class SimulacionLucesComponent implements OnInit {

  @Input() Cuarto1: boolean = false;
  @Input() Cuarto2: boolean = false;
  @Input() Baño: boolean = false;
  @Input() Cocina: boolean = false;
  @Input() Sala: boolean = false;
  @Input() Comedor: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }




}
