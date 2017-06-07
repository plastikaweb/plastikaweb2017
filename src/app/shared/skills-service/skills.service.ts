import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { ISkill } from 'app/models/skill.model';

@Injectable()
export class SkillsService {

  constructor(private db: AngularFireDatabase) { }

  findAllActiveSkills(): Observable<ISkill[]> {
    return this.db.list('/skills', {
      query: { orderByChild: 'active', equalTo: true }
    });
  }
}
