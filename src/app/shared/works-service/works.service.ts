import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { IWork } from '../../models/work.model';

@Injectable()
export class WorksService {

  constructor(private db: AngularFireDatabase) {
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
}
