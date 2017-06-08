import { Component, Input, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

import { ISkill } from '../../models/skill.model';
import { ITranslation } from '../../models/work.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html'
})
export class SkillComponent implements OnInit {

  @Input() skill: ISkill;
  view: any[] = [ 200, 100 ];
  years = '';
  proficiency = '';

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.getTranslation(this.translate.currentLang)
      .subscribe(translation => this.translateChartsUnits(translation));

    this.translate.onLangChange
      .switchMap((e: LangChangeEvent) => this.translate.getTranslation(e.lang))
      .subscribe(translation => this.translateChartsUnits(translation));
  }

  formatProficiency(proficiency) {
    return `${proficiency}%`;
  }

  translateChartsUnits(translation) {
    this.proficiency = translation.WHO.proficiency;
    this.years = translation.WHO.years;
  }

  getRemoteTranslation(item: ITranslation): string {
    return item[ this.translate.currentLang ];
  }

}
