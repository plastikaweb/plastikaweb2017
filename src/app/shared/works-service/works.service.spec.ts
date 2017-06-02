import { TestBed, inject } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';

import { WorksService } from './works.service';
import { afDbMock } from '../../mocks/works.mock';

describe('WorksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WorksService,
        { provide: AngularFireDatabase, useValue: afDbMock }
      ]
    });
  });

  it('should be created', inject([ WorksService ], (service: WorksService) => {
    expect(service).toBeTruthy();
  }));
});
