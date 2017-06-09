import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { ITag } from '../../models/tag.model';

@Injectable()
export class TagsService {

  constructor(private db: AngularFireDatabase) {
  }

  findTagsByWork(workKey: string): Observable<ITag[]> {
    console.log(workKey);
    return this.db.list(`/tagsPerWork/${workKey}`)
      .map(tags => tags.map(
        tag => this.db.object(`/tags/${tag.$key}`)
      ))
      .mergeMap(tags => Observable.combineLatest(tags))
      .do(console.log);
  }

}
