import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { IProject } from '../../models/project.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: [ './work.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent implements OnInit {

  project: IProject;
  slug;
  activatedRouteSubscription: Subscription;
  projectSubscription: Subscription;

  constructor(private db: AngularFireDatabase,
              private chRef: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRouteSubscription = this.activatedRoute
      .params
      .map(param => param['slug'])
      .subscribe((slug) => this.slug = slug);

    this.projectSubscription = this.db.list('/projects', {
      query: { orderByChild: 'slug', equalTo: this.slug }
    })
      .subscribe((data: IProject[]) => {
        this.project = data[0];
        this.chRef.detectChanges();
      });
  }

}
