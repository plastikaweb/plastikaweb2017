import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { DEFAULT_LANG, LANGUAGES } from '../../config/lang.config';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit{
  defaultLang = DEFAULT_LANG;
  languages = LANGUAGES;
  currentLang;
  changeLangMessage = 'change lang';

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer,
              private translate: TranslateService,
              private breadcrumbService: BreadcrumbService) {

    iconRegistry.addSvgIcon(
      'plastika-web',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/w.svg'));

    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/github.svg'));

  }

  ngOnInit() {
    // on change language update tooltip message
    this.translate.onLangChange
      .map((e: LangChangeEvent) => e.lang)
      .switchMap((lang: string) => this.translate.getTranslation(lang))
      .subscribe(translation => {
        this.changeLangMessage = translation.HEADER.changeLang;
        this.breadcrumbService.addFriendlyNameForRoute('/who', translation.WHO.title);
        this.breadcrumbService.addFriendlyNameForRoute('/works', translation.WORKS.title);
        this.breadcrumbService.addFriendlyNameForRoute('/contact', translation.CONTACT.title);
      });

    // get app languages and set current language
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang(this.defaultLang);
    const browserLang = this.translate.getBrowserLang();
    const lang = this.languages.indexOf(browserLang) !== -1 ?
      browserLang : this.defaultLang;

    this.onChangeLang(lang);
  }

  private onChangeLang(lang) {
    this.currentLang = lang;
    this.translate.use(this.currentLang);
  }
}
