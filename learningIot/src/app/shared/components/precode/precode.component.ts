import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-precode',
  templateUrl: './precode.component.html',
  styleUrls: ['./precode.component.scss']
})
export class PrecodeComponent implements OnInit {

  // CODIGO 1
  @Input() code:string = ""
  @Input() top = 0;
  @Input() explain:string[] = [];
  @Input() max_line:number = 0;
  @Input() curent_line:number = 1;
  top_style:string = '';
  explain_txt:string = '';
  constructor() { }

  ngOnInit(): void {
    this.top_style = `${this.top}px`;
    this.add_explain();
  }

  add_explain():void {
    this.explain_txt = this.explain[this.curent_line - 1];
  }

  next(): void {
    if(this.curent_line >= this.max_line){ return; }
    this.top += 24;
    this.top_style = `${this.top}px`;
    this.curent_line ++;
    this.add_explain();
  }

  back(): void {
    if(this.curent_line <= 1){ return; }
    this.top -= 24;
    this.top_style = `${this.top}px`;
    this.curent_line --;
    this.add_explain();
  }

}
