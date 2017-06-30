import { AngularFireDatabase } from 'angularfire2/database';
import { TestBed, inject } from '@angular/core/testing';

import { TagsService } from '../../shared/tags-service/tags.service';
import { workList } from '../../mocks/works.mock';
import { WorkResolver } from './work-resolver.service';
import { WorksService } from '../../shared/works-service/works.service';

describe('Work Resolver Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TagsService,
        WorksService,
        WorkResolver,
        { provide: AngularFireDatabase, useValue: workList }
      ]
    });
  });

  it('should be created', inject([ WorkResolver, WorksService, TagsService ],
    (resolver: WorkResolver, worksService: WorksService, tagsService: TagsService) => {
      expect(resolver).toBeTruthy();
      expect(worksService).toBeTruthy();
      expect(tagsService).toBeTruthy();
    }));

});
