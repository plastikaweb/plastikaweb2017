import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { CovalentLayoutModule, CovalentMediaModule, TdMediaService } from '@covalent/core';
import { LocalizeRouterModule } from 'localize-router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/map';

import { AppRoutingModule } from '../app-routing.module';
import { BreadcrumbControlComponent } from './breadcrumb-control/breadcrumb-control.component';
import { ContactModule } from '../contact-module/contact.module';
import { MainContentComponent } from './main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WhoModule } from '../who-module/who.module';
import { WorksModule } from '../works-module/works.module';
import { MdCardModule, MdIconModule, MdListModule } from '@angular/material';

describe('Main Content Component', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TdMediaService,
        TranslateService,
        { provide: APP_BASE_HREF, useValue: '/' },
        BreadcrumbService
      ],
      imports: [
        AppRoutingModule,
        CovalentLayoutModule,
        CovalentMediaModule,
        MdCardModule,
        MdIconModule,
        MdListModule,
        NgxChartsModule,
        LocalizeRouterModule.forRoot([]),
        TranslateModule.forRoot(),
        Ng2BreadcrumbModule.forRoot(),
        WhoModule,
        WorksModule,
        ContactModule
      ],
      declarations: [
        MainContentComponent,
        SidenavComponent,
        BreadcrumbControlComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    component.ngAfterViewInit();
    fixture.detectChanges();
  });

  it('should be created', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));
// prevent from http json files (must be mocked)
//   it('should update the breadcrum section language appropiately',
//     fakeAsync(inject([ BreadcrumbService ], (breadcrumb) => {
//       fixture.detectChanges();
//       expect(breadcrumb.getFriendlyNameForRoute('/who')).toEqual('who');
//     })));
});
