import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: [ './language-menu.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageMenuComponent {
  @Input() languages = [];
  @Input() currentLang = 'ca';
  @Input() changeLangMessage = 'change';
  @Output() emitCurrentLang = new EventEmitter();

  changeLang(lang) {
    this.emitCurrentLang.emit(lang);
  }

}
