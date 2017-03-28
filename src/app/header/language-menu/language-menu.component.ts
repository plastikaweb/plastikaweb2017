import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageMenuComponent implements OnInit {
  defaultLang = 'en';
  languages = [ 'ca', 'en', 'es' ];
  browserLang;

  constructor(public translate: TranslateService) {

  }

  changeLang(lang) {
    this.translate.use(lang);
  }

  ngOnInit() {
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang(this.defaultLang);
    this.browserLang = this.translate.getBrowserLang();
    this.translate.use(this.languages.indexOf(this.browserLang) !== -1 ? this.browserLang : this.defaultLang);
  }

}
