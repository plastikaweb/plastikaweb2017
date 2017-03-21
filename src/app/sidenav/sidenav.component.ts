import { Component, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit {

  constructor(public media: TdMediaService) { }


  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
  }

}
