import { Component, Input, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

import { ImagesService } from '../../shared/shared.module';
import { ISkill } from '../../models/skill.model';
import { ITranslation, IWork } from '../../models/work.model';
import { WorksService } from '../../shared/shared.module';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: [ './skill.component.scss' ]
})
export class SkillComponent implements OnInit {

  @Input() skill: ISkill;
  view: any[] = [ 200, 100 ];
  years = '';
  proficiency = '';
  $worksRelated: Observable<IWork[]>;
  imagesService;

  constructor(private translate: TranslateService,
              private worksService: WorksService,
              private _imagesService: ImagesService) {
    this.imagesService = _imagesService;
  }

  ngOnInit() {
    this.$worksRelated = this.worksService.findWorksBySkill(this.skill.slug);

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
