import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { langConfig } from '../config/lang.config';
import { LocalizeParser, LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService,
              private localizeParser: LocalizeParser,
              private localize: LocalizeRouterService) {
  }

  ngOnInit() {
    // get app languages and set current language
    this.translate.addLangs(langConfig.languages);
    this.translate.defaultLang = langConfig.defaultLang;
    const browserLang = this.translate.getBrowserLang();
    const routeLang = this.localizeParser.getLocationLang();
    // // initial language based on =>
    // // 1: route lang segment / 2: browser lang / 3: default app lang
    const language = routeLang ? routeLang : (this.translate.getLangs().indexOf(browserLang) !== -1 ?
      browserLang : this.translate.defaultLang);
    this.localize.changeLanguage(language);
    // force change lang detection
    // setTimeout( (lang) => {
    //   this.onChangeLang(lang);
    // }, 2000, language);

  }

  onChangeLang(lang) {
    console.log(lang);
    this.localize.changeLanguage(lang);
  }

}
