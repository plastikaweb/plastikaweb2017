import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IWork } from '../../models/work.model';
import { TagsService } from '../../shared/tags-service/tags.service';
import { WorksService } from '../../shared/works-service/works.service';

@Injectable()
export class WorksResolver implements Resolve<[ IWork[], string[] ]> {

  constructor(private worksService: WorksService, private tagsService: TagsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[ IWork[], string[] ]> {
    return this.worksService.addTagListToWorks()
      .switchMap(
        () => this.tagsService.getTagsNames(),
        (works, tags) => [ works, tags ]
      );
  }
}
