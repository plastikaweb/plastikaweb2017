import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { DEFAULT_LANG, LANGUAGES } from '../config/lang.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  languages = LANGUAGES;
  defaultLang = DEFAULT_LANG;
  currentLang;

  constructor(private translate: TranslateService,
              private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {

    // get app languages and set current language
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang(this.defaultLang);
    const browserLang = this.translate.getBrowserLang();
    const lang = this.languages.indexOf(browserLang) !== -1 ?
      browserLang : this.defaultLang;
    this.onChangeLang(lang);

    this.translate.onLangChange
      .map((e: LangChangeEvent) => e.lang)
      .switchMap((lang: string) => this.translate.getTranslation(lang))
      .subscribe(translation => {
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
