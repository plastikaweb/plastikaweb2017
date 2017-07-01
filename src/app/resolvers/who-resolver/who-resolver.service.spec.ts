import { AngularFireDatabase } from 'angularfire2/database';
import { TestBed, inject } from '@angular/core/testing';

import { worksMock } from '../../mocks/works.mock';
import { SkillsService } from '../../shared/skills-service/skills.service';
import { WhoResolver } from './who-resolver.service';

describe('Who Resolver Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SkillsService,
        WhoResolver,
        { provide: AngularFireDatabase, useValue: worksMock }
      ]
    });
  });

  it('should be created', inject([ WhoResolver, SkillsService ],
    (resolver: WhoResolver, service: SkillsService) => {
      expect(resolver).toBeTruthy();
      expect(service).toBeTruthy();
    }));

});
