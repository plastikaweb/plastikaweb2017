import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

import { IProject, ITranslation } from '../../models/project.model';
import { fadeAnimation } from '../../animations/fade.animation';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: [ './work.component.scss' ],
  animations: [ fadeAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  project: IProject;
  slug;
  activatedRouteSubscription: Subscription;
  projectSubscription: Subscription;
  loadingImage = 'assets/images/background.jpg';
  offset = 100;
  activityColor = 'primary';

  constructor(private db: AngularFireDatabase,
              private chRef: ChangeDetectorRef,
              private translate: TranslateService,
              private breadcrumbService: BreadcrumbService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRouteSubscription = this.activatedRoute
      .params
      .map(param => param[ 'slug' ])
      .subscribe((slug) => this.slug = slug);

    this.projectSubscription = this.db.list('/projects', {
      query: { orderByChild: 'slug', equalTo: this.slug }
    })
      .subscribe((data: IProject[]) => {
        this.project = data[ 0 ];
        // check breadcrumb name for project
        const slug = this.project.slug;
        if (this.breadcrumbService.getFriendlyNameForRoute(slug) === slug) {
          this.breadcrumbService.addFriendlyNameForRoute(`/works/${slug}`, this.project.name);
        }
        this.chRef.detectChanges();
      });
  }

  ngOnDestroy() {
    this.activatedRouteSubscription.unsubscribe();
    this.projectSubscription.unsubscribe();
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
