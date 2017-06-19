import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { LocalizeRouterService } from 'localize-router';
import { TranslateService } from '@ngx-translate/core';

import { langConfig } from '../config/lang.config';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              private translate: TranslateService,
              private localize: LocalizeRouterService,
              @Inject(DOCUMENT) private document) {
  }

  ngOnInit() {
    // get app languages and set current language
    this.translate.addLangs(langConfig.languages);
    this.translate.setDefaultLang(langConfig.defaultLang);
    this.changeLangAttr(this.translate.currentLang);
  }

  /**
   * update app lang
   * @param lang
   */
  onChangeLang(lang) {
    this.localize.changeLanguage(lang);
    this.changeLangAttr(lang);
  }

  /**
   * Change lang attr for head tag on change app lang
   * @param lang
   */
  changeLangAttr(lang) {
    this.document.getElementsByTagName('html')[ 0 ]
      .setAttribute('lang', lang);
  }

}
