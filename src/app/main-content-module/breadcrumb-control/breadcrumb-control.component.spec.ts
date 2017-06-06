import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { APP_BASE_HREF } from '@angular/common';
import { LocalizeRouterModule } from 'localize-router';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/bundles/app.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { afDbMock } from '../../mocks/works.mock';
import { BreadcrumbControlComponent } from './breadcrumb-control.component';
import { WorksService } from '../../shared/works-service/works.service';

describe('BreadcrumbControlComponent', () => {
  let component: BreadcrumbControlComponent;
  let fixture: ComponentFixture<BreadcrumbControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        WorksService,
        { provide: AngularFireDatabase, useValue: afDbMock }
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
});
