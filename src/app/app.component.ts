import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { langConfig } from '../config/lang.config';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService,
              private localize: LocalizeRouterService) {
  }

  ngOnInit() {
    // get app languages and set current language
    this.translate.addLangs(langConfig.languages);
    this.translate.setDefaultLang(langConfig.defaultLang);
  }

  onChangeLang(lang) {
    this.localize.changeLanguage(lang);
  }

}
