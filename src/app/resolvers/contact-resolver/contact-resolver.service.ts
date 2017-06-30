import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactService } from '../../shared/contact-service/contact.service';

@Injectable()
export class ContactResolver implements Resolve<any> {

  constructor(private contactService: ContactService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.contactService.findContactData();
  }
}
