import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';

import { langConfig } from '../config/lang.config';

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
              private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    // get app languages and set current language
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang(this.defaultLang);
    const browserLang = this.translate.getBrowserLang();
    const language = this.languages.indexOf(browserLang) !== -1 ?
      browserLang : this.defaultLang;
    this.onChangeLang(language);

    this.translate.onLangChange
      .map((e: LangChangeEvent) => e.lang)
      .switchMap(lang => this.translate.getTranslation(lang))
      .subscribe(translation => {
        this.changeLangMessage = translation.HEADER.changeLang;
        this.breadcrumbService.addFriendlyNameForRoute('/who', translation.WHO.title);
        this.breadcrumbService.addFriendlyNameForRoute('/works', translation.WORKS.title);
        this.breadcrumbService.addFriendlyNameForRoute('/contact', translation.CONTACT.title);
      });
  }

  onChangeLang(lang) {
    this.currentLang = lang;
    this.translate.use(this.currentLang);
  }

}
