import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

import { fadeAnimation } from '../../animations/fade.animation';
import { ITranslation, IWork } from '../../models/work.model';
import { ImagesService } from '../../shared/images-service/images.service';
import { WorksService } from '../../shared/works-service/works.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  animations: [ fadeAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  work$: Observable<IWork>;
  workNameSubscription: Subscription;
  slug;
  offset = 100;
  activityColor = 'warn';
  imagesService;

  constructor(private worksService: WorksService,
              private _imagesService: ImagesService,
              private translate: TranslateService,
              private breadcrumbService: BreadcrumbService,
              private activatedRoute: ActivatedRoute) {
    this.imagesService = _imagesService;
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(param => {
        this.slug = param[ 'slug' ];
        this.work$ = this.worksService.findWorkBySlug(this.slug);

        // TODO - think about how to make a single call to service
        this.workNameSubscription = this.worksService
          .findWorkNameBySlug(this.slug)
          .subscribe(name => this.breadcrumbService
            .addFriendlyNameForRoute(`/works/${this.slug}`, name)
          );
      });
    // TODO it prevents that translate pipes and directives work on first load
    // TODO find fix
    this.translate.reloadLang(this.translate.currentLang);
  }

  ngOnDestroy() {
    this.workNameSubscription.unsubscribe();
  }

  getRemoteTranslation(item: ITranslation): string {
    return item[ this.translate.currentLang ];
  }

}
