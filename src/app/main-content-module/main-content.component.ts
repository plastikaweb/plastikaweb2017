import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TdMediaService } from '@covalent/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { WorksService } from '../shared/works-service/works.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent implements OnInit, AfterViewInit {

  constructor(public media: TdMediaService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private translate: TranslateService,
              private titleService: Title,
              private worksService: WorksService) {
  }

  ngOnInit() {
    // update <head> => <title> dynamically
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map((e) => this.activatedRoute)
      .switchMap(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.url;
      })
      .switchMap(data => this.translate
        .getTranslation(this.translate.currentLang)
        .switchMap(translation => {
          if (data[ 1 ]) {
            return this.worksService.findWorkNameBySlug(data[ 1 ].path);
          } else if (data[ 0 ]) {
            const mainSegment = translation[ data[ 0 ].path ].toUpperCase();
            return Observable.of(translation[ mainSegment ] [ 'sub' ]);
          }
          return Observable.of('Freelance Frontend Developer from Barcelona');
        })
      )
      .subscribe(
        title => this.titleService.setTitle('Plastikaweb - ' + title)
      );
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
