import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';

import { langConfig } from '../config/lang.config';
import { WorksService } from './shared/shared.module';
import { IWork } from './models/work.model';
import { LocalizeParser, LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  languages = langConfig.languages;
  defaultLang = langConfig.defaultLang;
  currentLang;
  changeLangMessage;

  constructor(private translate: TranslateService,
              private localizeParser: LocalizeParser,
              private localize: LocalizeRouterService,
              private worksService: WorksService,
              private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    // get app languages and set current language
    this.translate.addLangs(this.languages);
    const browserLang = this.translate.getBrowserLang();
    const routeLang = this.localizeParser.getLocationLang();
    const language = routeLang ? routeLang : (this.languages.indexOf(browserLang) !== -1 ?
      browserLang : this.defaultLang);
    this.translate.setDefaultLang(language);
    this.translate.getTranslation(language)
      .take(1)
      .subscribe(translation => {
        this.changeLangMessage = translation.HEADER.changeLang;
      });

    // force change lang detection
    this.onChangeLang(language);

    // subscribe to lang change to translate change lang menu message
    this.translate.onLangChange
      .switchMap(e => this.translate.getTranslation(e.lang))
      .subscribe(translation => {
        this.changeLangMessage = translation.HEADER.changeLang;
      });

    // hide locale routing segment from breadcrumbs
    this.breadcrumbService.hideRouteRegex('^/([A-Za-z]{2})$');
    // set all friendly projects name for breadcrumb
    this.worksService.findAllActiveWorks()
      .subscribe((data: IWork[]) => {
        data.forEach(work => {
          this.breadcrumbService
            .addFriendlyNameForRoute(`/works/${work.slug}`, work.name);
        });
      });

    this.translate.getLangs().forEach(lang => {
      const tempLang = lang;
      this.translate.getTranslation(lang)
        .subscribe(translation => {
          this.breadcrumbService.addFriendlyNameForRoute(`/${tempLang}/${translation.who}`, translation.WHO.title);
          this.breadcrumbService.addFriendlyNameForRoute(`/${tempLang}/${translation.works}`, translation.WORKS.title);
          this.breadcrumbService.addFriendlyNameForRoute(`/${tempLang}/${translation.contact}`, translation.CONTACT.title);
        });
    });

    // this.breadcrumbService.addFriendlyNameForRouteRegex('who|qui|quien$', translation.WHO.title);
    // this.breadcrumbService.addFriendlyNameForRouteRegex('works|treballs|trabajos$', translation.WORKS.title);
    // this.breadcrumbService.addFriendlyNameForRouteRegex('contact|contacte|contacto$', translation.CONTACT.title);


  }

  onChangeLang(lang) {
    this.currentLang = lang;
    this.localize.changeLanguage(lang);
    this.translate.use(this.currentLang);
  }

}
