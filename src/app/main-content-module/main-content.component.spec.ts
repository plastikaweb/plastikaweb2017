import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { CovalentCoreModule, TdMediaService } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { APP_BASE_HREF } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BreadcrumbService, Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';
import 'rxjs/add/operator/map';

import { AppRoutingModule } from '../app-routing.module';
import { MainContentComponent } from './main-content.component';
import { WhoModule } from '../who-module/who.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WorksModule } from '../works-module/works.module';
import { ContactModule } from '../contact-module/contact.module';

describe('Main Content Component', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TdMediaService,
        BreadcrumbService,
        TranslateService,
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      imports: [
        AppRoutingModule,
        CovalentCoreModule,
        NgxChartsModule,
        TranslateModule.forRoot(),
        Ng2BreadcrumbModule.forRoot(),
        WhoModule,
        WorksModule,
        ContactModule
      ],
      declarations: [
        MainContentComponent,
        SidenavComponent
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
