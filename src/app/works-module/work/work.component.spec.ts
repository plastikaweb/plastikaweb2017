import { ActivatedRoute, RouterModule } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Angulartics2Module } from 'angulartics2';
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { TranslateModule } from '@ngx-translate/core';

import { worksMock, workList } from '../../mocks/works.mock';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from '../../shared/shared.module';
import { TagsComponent } from '../tags/tags.component';
import { WorkComponent } from './work.component';

const MockActivatedRoute = {
  params: Observable.of({ slug: workList[ 0 ].slug }),
  data: Observable.of({
    work: [ (workList[ 0 ]), (workList[ 0 ].slug) ]
  })
};

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angulartics2Module.forRoot([]),
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
        LazyLoadImageModule,
        SharedModule
      ],
      declarations: [
        WorkComponent,
        TagsComponent
      ],
      providers: [
        BreadcrumbService,
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ActivatedRoute, useValue: MockActivatedRoute },
        { provide: AngularFireDatabase, useValue: worksMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return work data from resolver', () => {
    let work = null;
    component.work$.subscribe(data => work = data);
    expect(work.name).toBe('the project');
  });
});
