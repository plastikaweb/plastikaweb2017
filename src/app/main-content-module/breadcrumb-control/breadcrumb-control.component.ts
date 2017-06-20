import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { TranslateService } from '@ngx-translate/core';

import { IWork } from '../../models/work.model';
import { WorksService } from '../../shared/works-service/works.service';

@Component({
  selector: 'app-breadcrumb-control',
  templateUrl: './breadcrumb-control.component.html'
})
export class BreadcrumbControlComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService,
              private translate: TranslateService,
              private worksService: WorksService) {
  }

  ngOnInit() {
    // hide locale routing segment on breadcrumb
    this.breadcrumbService
      .hideRouteRegex('^/([A-Za-z]{2})$');

    // set all friendly projects name for breadcrumb
    this.worksService.findAllActiveWorks()
      .first()
      .subscribe((data: IWork[]) => {
        data.forEach(work => {
          this.breadcrumbService
            .addFriendlyNameForRouteRegex(`${work.slug}$`, work.name);
        });
      });

    // set all main section breadcrumb names for all site languages
    this.translate.getLangs().forEach(lang => {
      const tempLang = lang;
      this.translate.getTranslation(lang)
        .first()
        .subscribe(translation => {
          this.breadcrumbService
            .addFriendlyNameForRoute(`/${tempLang}/${translation.who}`, translation.WHO.title);
          this.breadcrumbService
            .addFriendlyNameForRoute(`/${tempLang}/${translation.works}`, translation.WORKS.title);
          this.breadcrumbService
            .addFriendlyNameForRoute(`/${tempLang}/${translation.contact}`, translation.CONTACT.title);
          this.breadcrumbService
            .addFriendlyNameForRoute(`/${tempLang}/${translation.cookies}`, translation.COOKIES.title);
        });
    });

  }

}
