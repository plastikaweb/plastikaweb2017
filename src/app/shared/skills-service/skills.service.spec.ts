import { AngularFireDatabase } from 'angularfire2/database';
import { inject, TestBed } from '@angular/core/testing';

import { worksMock } from '../../mocks/works.mock';
import { SkillsService } from './skills.service';

describe('SkillsService', () => {
  let service: SkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SkillsService,
        { provide: AngularFireDatabase, useValue: worksMock }
      ]
    });
  });

  beforeEach(inject([ SkillsService ], s => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
