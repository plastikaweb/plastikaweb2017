import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TranslateService } from 'ng2-translate';
import { Subscription } from 'rxjs/Subscription';

import { IProject, ITranslation } from '../models/project.model';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: [ './works.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksComponent implements OnInit, OnDestroy {
  projects: IProject[] = [];
  projectsSubscription: Subscription;

  constructor(private db: AngularFireDatabase,
              private chRef: ChangeDetectorRef,
              private translate: TranslateService) {
  }

  ngOnInit() {

    this.projectsSubscription = this.db.list('/projects', {
      query: { orderByChild: 'active', equalTo: true }
    })
      .subscribe((data: IProject[]) => {
        this.projects = data;
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

  getRemoteTranslation(item: ITranslation) {
    return item[ this.translate.currentLang ];
  }

}
