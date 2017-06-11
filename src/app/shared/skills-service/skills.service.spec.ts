import { AngularFireDatabase } from 'angularfire2/database';
import { inject, TestBed } from '@angular/core/testing';

import { afDbMock } from '../../mocks/works.mock';
import { SkillsService } from './skills.service';

describe('SkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SkillsService,
        { provide: AngularFireDatabase, useValue: afDbMock }
      ]
    });
  });

  it('should be created', inject([SkillsService], (service: SkillsService) => {
    expect(service).toBeTruthy();
  }));
});
