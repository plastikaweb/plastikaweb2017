import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

import { IProject, ITranslation } from '../models/project.model';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: [ './works.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksComponent implements OnInit, OnDestroy {
  projects: IProject[];
  projectsSubscription: Subscription;

  constructor(private db: AngularFireDatabase,
              private chRef: ChangeDetectorRef,
              private breadcrumbService: BreadcrumbService,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.projectsSubscription = this.db.list('/projects', {
      query: { orderByChild: 'active', equalTo: true }
    })
      .subscribe((data: IProject[]) => {
        this.projects = data;
        // set all friendly projects name for breadcrumb
        this.projects.forEach(project => {
          this.breadcrumbService
            .addFriendlyNameForRoute(`/works/${project.slug}`, project.name);
        });
        this.chRef.detectChanges();
      });
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }

  getMainImage(name) {
    return `assets/projects/${name}/${name}-1.png`;
  }

  getMainTechImage(name) {
    return `assets/icons/${name}.svg`;
  }

  getAvatar(name) {
    return `assets/projects/${name}/${name}-avatar.png`;
  }

  getRemoteTranslation(item: ITranslation) {
    return item[ this.translate.currentLang ];
  }

}
