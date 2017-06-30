import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

import { fadeAnimation } from '../../animations/fade.animation';
import { ImagesService } from '../../shared/images-service/images.service';
import { ITranslation, IWork } from '../../models/work.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  animations: [ fadeAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  work$: Observable<IWork>;
  slug;
  offset = 100;
  imagesService;

  constructor(private _imagesService: ImagesService,
              private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService,
              private translate: TranslateService) {
    this.imagesService = _imagesService;
  }

  ngOnInit() {
    this.work$ = this.route.data.map(data => data.work[ 0 ]);
    // TODO check if the named route for work is already added
    // or it is the first time (the loading has gone directly to work detail)
    this.route.data.map(data => data.work[ 1 ])
      .subscribe(name => this.breadcrumbService
        .addFriendlyNameForRoute(`/works/${this.slug}`, name)
      );
    // TODO find fix
    this.translate.reloadLang(this.translate.currentLang);
  }

  getRemoteTranslation(item: ITranslation): string {
    return item[ this.translate.currentLang ];
  }

}
