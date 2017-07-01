import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TdMediaService } from '@covalent/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { WorksService } from '../shared/works-service/works.service';
import { MdSnackBar } from '@angular/material';
import { CookiesSnackbarComponent } from '../cookies-snackbar-module/cookies-snackbar.component';
import { CookieService } from 'ng2-cookies';
import { NotFoundComponent } from '../not-found-module/not-found.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent implements OnInit, AfterViewInit {

  snackBarRef: any;
  isNotFound$: Observable<boolean>;

  constructor(public media: TdMediaService,
              private cookieService: CookieService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public snackBar: MdSnackBar,
              private translate: TranslateService,
              private titleService: Title,
              private worksService: WorksService) {
  }

  ngOnInit() {
    // update <head> => <title> dynamically
    const routerEvents$ = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map((e) => this.activatedRoute);

    const routeEventsData$ = routerEvents$.switchMap(route => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      // checks 404 error
      this.isNotFound$ = Observable.of(NotFoundComponent === route.component);
      return this.isNotFound$.withLatestFrom(route.url, (a, b) => (
        { notFound: a, url: b }
      ));
    });

    const titleUpdate$ = routeEventsData$.switchMap(data => {
        if (data.notFound) {
          return Observable.of('The page does not exist');
        }
        const url = data.url;
        return this.translate
          .getTranslation(this.translate.currentLang)
          .switchMap(translation => {
            if (url[ 1 ]) { // TODO - think a more robust solution
              return this.worksService.findWorkNameBySlug(url[ 1 ].path);
            } else if (url[ 0 ] && translation[ url[ 0 ].path ]) {
              const mainSegment = translation[ url[ 0 ].path ].toUpperCase();
              return Observable.of(translation[ mainSegment ] [ 'sub' ]);
            }
          })
      }
    );

    titleUpdate$.subscribe(
        title => this.titleService.setTitle('Plastikaweb - ' + title)
      );

    // cookies warning
    setTimeout(() => {
      if (!this.cookieService.check('pw-cookies')) {
        this.snackBarRef = this.snackBar
          .openFromComponent(CookiesSnackbarComponent);
        this.snackBarRef.instance.snackBarCookieRef = this.snackBarRef;
      }
    }, 0);
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
