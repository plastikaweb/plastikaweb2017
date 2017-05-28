import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageMenuComponent {
  @Input() languages = [];
  @Input() currentLang;
  @Input() changeLangMessage;
  @Output() emitCurrentLang: EventEmitter<string> = new EventEmitter();

  changeLang(lang) {
    this.emitCurrentLang.emit(lang);
  }

}
