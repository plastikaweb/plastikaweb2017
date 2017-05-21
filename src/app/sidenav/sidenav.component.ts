import { Component, AfterViewInit, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit, AfterViewInit {

  constructor(public media: TdMediaService,
              private translate: TranslateService,
              private cdr: ChangeDetectorRef,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.translate.onLangChange
      .map((e: LangChangeEvent) => e.lang)
      .switchMap((lang: string) => this.translate.getTranslation(lang))
      .subscribe(translation => {
        this.breadcrumbService.addFriendlyNameForRoute('/who', translation.WHO.title);
        this.breadcrumbService.addFriendlyNameForRoute('/works', translation.WORKS.title);
        this.breadcrumbService.addFriendlyNameForRoute('/contact', translation.CONTACT.title);
      });
  }

  ngAfterViewInit() {
    // broadcast to all listener observables when loading the page
    this.cdr.detectChanges();
    this.media.broadcast();
  }

}
