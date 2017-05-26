import { Component, ChangeDetectionStrategy, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() languages = [];
  @Input() currentLang;
  @Output() emitLangChange: EventEmitter<string> = new EventEmitter();
  changeLangMessage = 'change lang';

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer,
              private translate: TranslateService) {

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
      });

  }

  onChangeLang(lang) {
    this.emitLangChange.emit(lang);
  }
}
