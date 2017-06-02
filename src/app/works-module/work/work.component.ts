import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

import { fadeAnimation } from '../../animations/fade.animation';
import { IWork, ITranslation } from '../../models/work.model';
import { WorksService } from '../../shared/works-service/works.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: [ './work.component.scss' ],
  animations: [ fadeAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  work$: Observable<IWork>;
  workNameSubscription: Subscription;
  slug;
  loadingImage = 'assets/images/background.jpg';
  offset = 100;
  activityColor = 'warn';

  constructor(private worksService: WorksService,
              private translate: TranslateService,
              private breadcrumbService: BreadcrumbService,
              private activatedRoute: ActivatedRoute) {
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
  }

  ngOnDestroy() {
    this.workNameSubscription.unsubscribe();
  }

  getAvatar(name): string {
    return `assets/projects/${name}/${name}-avatar.png`;
  }

  getMainImage(name): string {
    return `assets/projects/${name}/${name}-1.png`;
  }

  getMainImageSet(name): string {
    return `
    assets/projects/${name}/${name}1200x600.png 1200w,
    assets/projects/${name}/${name}-1.png 600w,
    assets/projects/${name}/${name}400x600.png 400w
    `;
  }

  getMainTechImage(name) {
    return `assets/icons/${name}.svg`;
  }

  getRemoteTranslation(item: ITranslation): string {
    return item[ this.translate.currentLang ];
  }

}
