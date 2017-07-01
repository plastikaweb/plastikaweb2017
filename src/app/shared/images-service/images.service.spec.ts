import { TestBed, inject } from '@angular/core/testing';

import { ImagesService } from './images.service';

describe('ImagesService', () => {
  let service: ImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ImagesService ]
    });
  });

  beforeEach(inject([ ImagesService ], s => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
