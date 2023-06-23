import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  PATHIMG = `../../${environment.ASSETS_ICONS_PATH}/logos/logo_utp.png`

  constructor() { }

  ngOnInit(): void {
  }

}
