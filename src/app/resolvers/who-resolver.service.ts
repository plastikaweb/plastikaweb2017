import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ISkill } from '../models/skill.model';
import { SkillsService } from '../shared/skills-service/skills.service';

@Injectable()
export class WhoResolver implements Resolve<ISkill[]> {

  constructor(private skillsService: SkillsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISkill[]> {
    return this.skillsService.findAllActiveSkills();
  }
}
