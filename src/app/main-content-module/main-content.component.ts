import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent implements AfterViewInit {

  constructor(public media: TdMediaService,
              private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    // broadcast to all listener observables when loading the page
    this.cdr.detectChanges();
    // TODO - this fix does not occur in production
    // see https://github.com/Teradata/covalent/issues/425
    setTimeout(function (media) {
      media.broadcast();
    }, 0, this.media);
  }

}
