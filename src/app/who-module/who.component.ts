import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { fadeAnimation } from '../animations/fade.animation';
import { ISkill } from '../models/skill.model';
import { SkillsService } from '../shared/skills-service/skills.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  animations: [ fadeAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhoComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  skills$: Observable<ISkill[]>;
  activityColor = 'warn';

  constructor(private skillsService: SkillsService,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.skills$ = this.skillsService.findAllActiveSkills();
    // TODO it prevents that translate pipes and directives work on first load
    // TODO find fix
    this.translate.reloadLang(this.translate.currentLang);
  }

}
