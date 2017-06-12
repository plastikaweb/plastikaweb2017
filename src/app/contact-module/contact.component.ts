import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

import { fadeAnimation } from '../animations/fade.animation';
import { ContactService } from '../shared/shared.module';
import { ISocial } from '../models/contact.model';
import { ITranslation } from '../models/work.model';

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
  interests$: Observable<string[]>;

  constructor(private contactService: ContactService,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.email$ = this.contactService.findContactData('email');
    this.tlfn$ = this.contactService.findContactData('tlfn');
    this.socialMedia$ = this.contactService.findSocialData();
    this.interests$ = this.contactService.findInterests();
  }

  getRemoteTranslation(item: ITranslation): string {
    return item[ this.translate.currentLang ];
  }
}
