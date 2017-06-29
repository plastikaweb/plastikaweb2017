import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { IWork } from '../../models/work.model';
import { TagsService } from '../tags-service/tags.service';

@Injectable()
export class WorksService {

  constructor(private db: AngularFireDatabase,
              private tagsService: TagsService) {
  }

  /**
   * get all active works
   * @returns {FirebaseListObservable<any[]>}
   */
  findAllActiveWorks(): Observable<IWork[]> {
    return this.db.list('/works', {
      query: { orderByChild: 'active', equalTo: true }
    }).take(1);
  }

  /**
   * given active works add the tag list to each work
   * @returns {Observable<R>}
   */
  addTagListToWorks(): Observable<IWork[]> {
    return this.findAllActiveWorks()
      .map(works => works.map(
        // add tags list
        work => this.findTagsByWork(work)
        )
      )
      .switchMap(works => Observable.combineLatest(works))
      .first();
  }

  test(): FirebaseListObservable<any> {
    return this.db.list('/works');
  }

  /**
   * find a work given a slug
   * @param workSlug
   * @returns {Observable<R>}
   */
  findWorkBySlug(workSlug: string): Observable<IWork> {
    return this.db.list('/works', {
      query: { orderByChild: 'slug', equalTo: workSlug }
    })
      .map(works => works[ 0 ])
      // add tags list
      .switchMap(work => this.findTagsByWork(work)
      )
      .first();
  }

  /**
   * find the name of a work given the slug
   * @param workSlug
   * @returns {Observable<R>}
   */
  findWorkNameBySlug(workSlug: string): Observable<string> {
    return this.findWorkBySlug(workSlug)
      .map(work => work.name);
  }

  /**
   * given a skill name (tag) return all the works related
   * @param skillName
   * @returns {Observable<R>}
   */
  findWorksBySkill(skillName: string): Observable<IWork[]> {
    return this.tagsService.findTagFromName(skillName)
      .switchMap(tag => this.db.list(`/worksPerTag/${tag.$key}`)
        .map(
          works => works.map(work => this.db.object(`/works/${work.$value}`))
        )
        .switchMap(works => Observable.combineLatest(works))
      )
      .map(
        (works: IWork[]) => works.filter((work: IWork) => work.active)
      );
  }

  /**
   * add tags list per work
   * @param work
   * @returns {Observable<R>}
   */
  private findTagsByWork(work) {
    return this.tagsService.findTagsByWork(work.$key)
      .map(tags => {
        work.tags = tags;
        return work;
      });
  }
}
