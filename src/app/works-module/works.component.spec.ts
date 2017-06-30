import { Angulartics2Module } from 'angulartics2';
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentChipsModule } from '@covalent/core';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LocalizeRouterModule } from 'localize-router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FilterPipe } from './filter-pipe/filter.pipe';
import { FilterWorksComponent } from './filter-works/filter-works.component';
import { SharedModule } from '../shared/shared.module';
import { TagsComponent } from './tags/tags.component';
import { WorksComponent } from './works.component';

// const MockActivatedRoute = {
//   data: Observable.of({
//     works: [ (workList), {tagsList} ]
//   })
// };

describe('Works Component', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angulartics2Module.forRoot([]),
        BrowserAnimationsModule,
        CovalentChipsModule,
        FormsModule,
        LazyLoadImageModule,
        LocalizeRouterModule.forRoot([]),
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),
        SharedModule
      ],
      declarations: [
        FilterPipe,
        FilterWorksComponent,
        TagsComponent,
        WorksComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        // { provide: ActivatedRoute, useValue: MockActivatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should update filtered tags array', () => {
    component.doFilter([ 'tag1', 'tag2' ]);
    expect(component.tagsFilter.length).toBe(2);
  });

  it('should add or remove tag to filtered tags array', () => {
    component.tagSelection('tag3');
    expect(component.sendTagSelection).toBe('tag3');
  });

  // fit('should return works data from resolver', () => {
  //   let works = null;
  //
  //   component.works$.subscribe(data => {
  //     console.log(data);
  //     works = data[0];
  //   });
  //   component.ngOnInit();
  //   fixture.detectChanges();
  //   expect(works.length).toBe(workList.length);
  // });
  //
  // fit('should return tags data from resolver', () => {
  //   let tags = null;
  //   fixture.detectChanges();
  //   component.allTags$.subscribe(data => tags = data[0]);
  //   component.ngOnInit();
  //   fixture.detectChanges();
  //   expect(tags.length).toBe(tagsList.length);
  // });

});
