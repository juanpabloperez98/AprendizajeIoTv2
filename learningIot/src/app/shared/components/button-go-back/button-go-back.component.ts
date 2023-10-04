import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-button-go-back',
  templateUrl: './button-go-back.component.html',
  styleUrls: ['./button-go-back.component.scss']
})
export class ButtonGoBackComponent implements OnInit {


  @Input() lastSection: boolean = false;

  public direct: string = "#"

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onClick(){
    if(this.lastSection){
      this.router.navigate(['/aplicaciones/main']);
    }else{
      this.router.navigate(['/']);
    }
  }

}
