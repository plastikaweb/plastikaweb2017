import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

import { fadeAnimation } from '../animations/fade.animation';
import { ContactService } from '../shared/shared.module';
import { Observable } from 'rxjs/Observable';
import { ISocial } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: [ fadeAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  email$: Observable<string>;
  tlfn$: Observable<string>;
  socialMedia$: Observable<ISocial[]>;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.email$ = this.contactService.findContactData('email');
    this.tlfn$ = this.contactService.findContactData('tlfn');
    this.socialMedia$ = this.contactService.findSocialData();
  }
}
