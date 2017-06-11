import { AngularFireDatabase } from 'angularfire2/database';
import { TestBed, inject } from '@angular/core/testing';

import { afDbMock } from '../../mocks/works.mock';
import { TagsService } from '../tags-service/tags.service';
import { WorksService } from './works.service';

describe('WorksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WorksService,
        TagsService,
        { provide: AngularFireDatabase, useValue: afDbMock }
      ]
    });
  });

  it('should be created', inject([ WorksService ], (service: WorksService) => {
    expect(service).toBeTruthy();
  }));
});
