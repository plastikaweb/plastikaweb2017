import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

import { fadeAnimation } from '../animations/fade.animation';
import { ISkill } from '../models/skill.model';
import { SkillsService } from '../shared/skills-service/skills.service';
import { ITranslation } from '../models/work.model';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: [ './who.component.scss' ],
  animations: [ fadeAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhoComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  view: any[] = [ 200, 100 ];
  skills$: Observable<ISkill[]>;
  years = '';
  proficiency = '';
  activityColor = 'warn';

  constructor(private translate: TranslateService,
              private skillsService: SkillsService) {
  }

  ngOnInit() {
    this.translate.getTranslation(this.translate.currentLang)
      .subscribe(translation => this.translateChartsUnits(translation));

    this.translate.onLangChange
      .switchMap((e: LangChangeEvent) => this.translate.getTranslation(e.lang))
      .subscribe(translation => this.translateChartsUnits(translation));

    this.skills$ = this.skillsService.findAllActiveSkills();
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
