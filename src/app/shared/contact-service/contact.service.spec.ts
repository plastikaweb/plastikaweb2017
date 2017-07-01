import { AngularFireDatabase } from 'angularfire2/database';
import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { contactbMock, contactObject } from '../../mocks/contact.mock';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactService,
        { provide: AngularFireDatabase, useValue: contactbMock }
      ]
    });
  });

  beforeEach(inject([ ContactService ], s => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return contact data from firebase', () => {
    const contactObservable = service.findContactData();
    contactObservable.subscribe(data => {
      expect(data.email).toEqual(contactObject.email);
      expect(data.tlfn).toEqual(contactObject.tlfn);
      expect(data.intro.length).toEqual(contactObject.intro.length);
      expect(data.interests.length).toBe(contactObject.interests.length);
    });
  });

});
