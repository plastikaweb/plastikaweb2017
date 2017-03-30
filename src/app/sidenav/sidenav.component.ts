import { Component, AfterViewInit, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';
import { TranslateService, LangChangeEvent } from 'ng2-translate';

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
              private breadcrumbService: BreadcrumbService) {

  }

  ngOnInit() {
    this.translate.onLangChange.subscribe((e: LangChangeEvent) => {
      this.translate.getTranslation(e.lang).subscribe(data => {
        this.breadcrumbService.addFriendlyNameForRoute('/who', data.WHO.title);
        this.breadcrumbService.addFriendlyNameForRoute('/works', data.WORKS.title);
        this.breadcrumbService.addFriendlyNameForRoute('/contact', data.CONTACT.title);
      });
    });
  }

  ngAfterViewInit() {
    // broadcast to all listener observables when loading the page
    this.cdr.detectChanges();
    this.media.broadcast();
  }

}
