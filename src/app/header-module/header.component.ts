import { Component, ChangeDetectionStrategy, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { Iconography } from '../../data/iconography';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  languages = this.translate.getLangs();
  currentLang = this.translate.currentLang;
  changeLangMessage$: Observable<string>;
  @Output() emitLangChange: EventEmitter<string> = new EventEmitter();

  plastikawebIcon = Iconography.plastikaweb;
  githubIcon = Iconography.github;

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.iconRegistry.addSvgIcon(
      this.plastikawebIcon.label,
      this.sanitizer.bypassSecurityTrustResourceUrl(this.plastikawebIcon.image));
    this.iconRegistry.addSvgIcon(
      this.githubIcon.label,
      this.sanitizer.bypassSecurityTrustResourceUrl(this.githubIcon.image));

    // translation of lang menu tooltip
    const getTrans$ = this.translate.getTranslation(this.currentLang);
    const getTransOnChange$ = this.translate.onLangChange
      .switchMap(e => this.translate.getTranslation(e.lang));
    this.changeLangMessage$ = getTrans$.merge(getTransOnChange$)
      .map(translation => translation.HEADER.changeLang);
  }

  onChangeLang(lang) {
    this.emitLangChange.emit(lang);
    this.currentLang = lang;
  }
}
