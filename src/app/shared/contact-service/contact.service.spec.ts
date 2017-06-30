import { AngularFireDatabase } from 'angularfire2/database';
import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { contactbMock, contactObject } from '../../mocks/contact.mock';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactService,
        { provide: AngularFireDatabase, useValue: contactbMock }
      ]
    });
  });

  it('should be created', inject([ ContactService ], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));

  it('should return contact data from firebase', inject([ ContactService ], (service: ContactService) => {
    const contactObservable = service.findContactData();
    contactObservable.subscribe(data => {
      expect(data.email).toEqual(contactObject.email);
      expect(data.tlfn).toEqual(contactObject.tlfn);
      expect(data.intro.length).toEqual(contactObject.intro.length);
      expect(data.interests.length).toBe(contactObject.interests.length);
    });
  }));

});
