import { AngularFireDatabase } from 'angularfire2/database';
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { LocalizeRouterModule } from 'localize-router';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/bundles/app.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { worksMock } from '../../mocks/works.mock';
import { BreadcrumbControlComponent } from './breadcrumb-control.component';
import { TagsService, WorksService } from '../../shared/shared.module';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';

describe('BreadcrumbControlComponent', () => {
  let component: BreadcrumbControlComponent;
  let fixture: ComponentFixture<BreadcrumbControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        WorksService,
        TagsService,
        { provide: AngularFireDatabase, useValue: worksMock }
      ],
      imports: [
        Ng2BreadcrumbModule.forRoot(),
        LocalizeRouterModule.forRoot([]),
        TranslateModule.forRoot(),
        RouterModule.forRoot([])
      ],
      declarations: [ BreadcrumbControlComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should update the breadcrum section language appropiately',
    fakeAsync(inject([ BreadcrumbService ], (breadcrumb) => {
      fixture.detectChanges();
      expect(breadcrumb.getFriendlyNameForRoute('/who')).toEqual('who');
    })));
});
