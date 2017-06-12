import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent implements AfterViewInit {

  constructor(public media: TdMediaService) {
  }

  ngAfterViewInit() {
    // broadcast to all listener observables when loading the page
    // TODO - this fix does not occur in production
    // see https://github.com/Teradata/covalent/issues/425
    setTimeout((media) => {
      media.broadcast();
    }, 0, this.media);
  }

}
