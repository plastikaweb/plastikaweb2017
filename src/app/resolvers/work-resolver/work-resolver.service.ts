import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {IWork} from '../../models/work.model';
import {WorksService} from '../../shared/works-service/works.service';

@Injectable()
export class WorkResolver implements Resolve<[IWork, string]> {

  constructor(private worksService: WorksService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[IWork, string]> {

    return this.worksService.findWorkBySlug(route.params['slug'])
      .switchMap(work => this.worksService.findWorkNameBySlug(work.slug),
        (work, slug) => [work, slug]);
  }
}
