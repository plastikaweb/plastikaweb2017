import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

import { fadeAnimation } from '../animations/fade.animation';
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

  contactData$: Observable<any>;

  constructor(private route: ActivatedRoute,
              private translate: TranslateService) {
  }

  ngOnInit() {
      this.contactData$ =  this.route.data.map(data => data.contact);
    // TODO it prevents that translate pipes and directives work on first load
    // TODO find fix
    this.translate.reloadLang(this.translate.currentLang);
  }

  getRemoteTranslation(item: ITranslation): string {
    return item[ this.translate.currentLang ];
  }
}
