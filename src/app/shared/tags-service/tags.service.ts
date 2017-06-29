import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { ITag } from '../../models/tag.model';

@Injectable()
export class TagsService {

  constructor(private db: AngularFireDatabase) {
  }

  getTagsNames(): Observable<string[]> {
    return this.db.list('tags')
      .map(tags => tags.map(tag => tag.name))
      .first();
  }

  findTagsByWork(workKey: string): Observable<ITag[]> {
    return this.db.list(`/tagsPerWork/${workKey}`)
      .map(tags => tags.map(
        tag => this.db.object(`/tags/${tag.$value}`)
      ))
      .switchMap(tags => Observable.combineLatest(tags));
  }

  findTagFromName(tagName: string): Observable<ITag> {
    return this.db.list(`/tags`, {
      query: {
        orderByChild: 'name', equalTo: tagName
      }
    })
      .map(tags => tags[ 0 ]);
  }

}
