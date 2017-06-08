import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { fadeAnimation } from '../animations/fade.animation';
import { ISkill } from '../models/skill.model';
import { SkillsService } from '../shared/skills-service/skills.service';

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
  skills$: Observable<ISkill[]>;
  activityColor = 'warn';

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit() {
    this.skills$ = this.skillsService.findAllActiveSkills();
  }

}
