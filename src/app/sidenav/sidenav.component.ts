import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements AfterViewInit {

  constructor(public media: TdMediaService, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.cdr.detectChanges();
    this.media.broadcast();
  }

}
