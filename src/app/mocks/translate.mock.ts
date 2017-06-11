import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { EventEmitter } from '@angular/core';
import { LangChangeEvent } from '@ngx-translate/core';

const translations = {
  WHO: {
    proficiency: 'proficiency',
    years: 'years'
  },
  HEADER: {
    changeLang: 'change lang'
  }
};
const currentLang = 'en';
const browserLang = 'en';
const langs = [ 'en', 'es' ];

export const transMock = {
  currentLang: currentLang,
  browserLang: browserLang,
  defaultLang: currentLang,
  translations: translations,
  langs: langs,
  onLangChange: new EventEmitter<LangChangeEvent>(),
  changeLang: (lang) => {
    this.currentLang = lang;
    this.onLangChange.emit({ lang: lang, translations: translations[lang] });
  },
  addLangs: (lang) => langs.push(lang),
  getLangs: () => langs,
  getBrowserLang: () => browserLang,
  getTranslation: (trans) => Observable.of(translations),
  setDefaultLang: (lang) => this.defaultLang = lang,
  get: (key) => Observable.of('value'),
  use: (lang) => Observable.of(null)
};
