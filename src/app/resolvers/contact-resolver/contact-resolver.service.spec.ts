import { AngularFireDatabase } from 'angularfire2/database';
import { TestBed, inject } from '@angular/core/testing';

import { contactbMock } from '../../mocks/contact.mock';
import { ContactResolver } from './contact-resolver.service';
import { ContactService } from '../../shared/contact-service/contact.service';

describe('Contact Resolver Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactService,
        ContactResolver,
        { provide: AngularFireDatabase, useValue: contactbMock }
      ]
    });
  });

  it('should be created', inject([ ContactResolver, ContactService ],
    (resolver: ContactResolver, service: ContactService) => {
      expect(resolver).toBeTruthy();
      expect(service).toBeTruthy();
    }));

});
