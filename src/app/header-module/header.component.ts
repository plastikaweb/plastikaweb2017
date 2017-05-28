import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { Iconography } from '../../data/iconography';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() languages = [];
  @Input() currentLang;
  @Input() changeLangMessage;
  @Output() emitLangChange: EventEmitter<string> = new EventEmitter();
  plastikawebIcon = Iconography.plastikaweb;
  githubIcon = Iconography.github;

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      this.plastikawebIcon.label,
      sanitizer.bypassSecurityTrustResourceUrl(this.plastikawebIcon.image));
    iconRegistry.addSvgIcon(
      this.githubIcon.label,
      sanitizer.bypassSecurityTrustResourceUrl(this.githubIcon.image));
  }

  onChangeLang(lang) {
    this.emitLangChange.emit(lang);
  }
}
