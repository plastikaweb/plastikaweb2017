import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/of';

@Injectable()
export class TranslateServiceMock {
  private defaultLang;
  private langs;
  private currentLang;
  private translations = {

  };

  addLangs(langs) {
    this.langs = langs;
  }

  getLangs() {
    return this.langs;
  }

  setDefaultLang(lang) {
    this.defaultLang = lang;
  }

  getBrowserLang() {
    return 'es';
  }

  use(lang) {
    this.currentLang = lang;
    return Observable.of(this.translations[ lang ]);
  }

}
