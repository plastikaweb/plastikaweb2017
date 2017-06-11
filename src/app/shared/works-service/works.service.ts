import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { IWork } from '../../models/work.model';
import { TagsService } from '../tags-service/tags.service';

@Injectable()
export class WorksService {

  constructor(private db: AngularFireDatabase,
              private tagsService: TagsService) {
  }

  findAllActiveWorks(): Observable<IWork[]> {
    return this.db.list('/works', {
      query: { orderByChild: 'active', equalTo: true }
    });
  }

  findWorkBySlug(workSlug: string): Observable<IWork> {
    return this.db.list('/works', {
      query: { orderByChild: 'slug', equalTo: workSlug }
    })
      .map(data => data[ 0 ])
      .first();
  }

  findWorkNameBySlug(workSlug: string): Observable<string> {
    return this.findWorkBySlug(workSlug)
      .map(work => work.name);
  }

  findWorksBySkill(skillName: string): Observable<IWork[]> {
    return this.tagsService.findTagFromName(skillName)
      .switchMap(tag => this.db.list(`/worksPerTag/${tag.$key}`)
        .map(
          works => works.map(work => this.db.object(`/works/${work.$value}`))
        )
        .mergeMap(works => Observable.combineLatest(works))
      )
      .map(
        (works: IWork[]) => works.filter((work: IWork) => work.active)
      );
  }
}
