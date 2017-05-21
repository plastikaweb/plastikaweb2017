import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

import { DEFAULT_LANG, LANGUAGES } from '../../../config/lang.config';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: [ './language-menu.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageMenuComponent implements OnInit {
  defaultLang = DEFAULT_LANG;
  languages = LANGUAGES;
  currentLang;
  changeLangMessage = 'change lang';

  constructor(private translate: TranslateService) {}

  changeLang(lang) {
    this.currentLang = lang;
    this.translate.use(this.currentLang);
  }

  ngOnInit() {
    // on change language update tooltip message
    this.translate.onLangChange
      .map((e: LangChangeEvent) => e.lang)
      .switchMap((lang: string) => this.translate.getTranslation(lang))
      .subscribe(translation => {
        this.changeLangMessage = translation.HEADER.changeLang;
      });

    // get app languages and set current language
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang(this.defaultLang);
    const browserLang = this.translate.getBrowserLang();
    const newLang = this.languages.indexOf(browserLang) !== -1 ?
      browserLang : this.defaultLang;

    this.changeLang(newLang);
  }

}
