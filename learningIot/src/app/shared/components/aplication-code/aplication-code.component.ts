import { Component, Input, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-aplication-code',
  templateUrl: './aplication-code.component.html',
  styleUrls: ['./aplication-code.component.scss']
})
export class AplicationCodeComponent implements OnInit {

    // CODIGO 1
    @Input() code: string = '';
    @Input() top = 0;
    @Input() curent_line: number = 1;
    top_style: string = '';
    explain_txt: string = '';
    line: string = '';
    estiloEx: string = 'display:inline';
    estilo: string = 'display:none';

  constructor(private highlightService: HighlightService) {}

  ngOnInit(): void {

  }
  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

}
