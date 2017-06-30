import { AngularFireDatabase } from 'angularfire2/database';
import { TestBed, inject } from '@angular/core/testing';

import { TagsService } from '../../shared/tags-service/tags.service';
import { workList } from '../../mocks/works.mock';
import { WorksResolver } from './works-resolver.service';
import { WorksService } from '../../shared/works-service/works.service';

describe('Works Resolver Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TagsService,
        WorksService,
        WorksResolver,
        { provide: AngularFireDatabase, useValue: workList }
      ]
    });
  });

  it('should be created', inject([ WorksResolver, WorksService, TagsService ],
    (resolver: WorksResolver, worksService: WorksService, tagsService: TagsService) => {
      expect(resolver).toBeTruthy();
      expect(worksService).toBeTruthy();
      expect(tagsService).toBeTruthy();
    }));

});
