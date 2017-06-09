import { inject, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/observable/combineLatest';

import { afDbMock } from '../../mocks/works.mock';
import { TagsService } from './tags.service';

describe('TagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TagsService,
        { provide: AngularFireDatabase, useValue: afDbMock }
      ]
    });
  });

  it('should be created', inject([ TagsService ], (service: TagsService) => {
    expect(service).toBeTruthy();
  }));
});
