import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { CovalentCoreModule, TdMediaService } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BreadcrumbService, Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';
import 'rxjs/add/operator/map';

import { AppRoutingModule } from '../app-routing.module';
import { WorksComponent } from '../works-module/works.component';
import { WhoComponent } from '../who/who.component';
import { ContactComponent } from '../contact/contact.component';
import { MainContentCardComponent } from '../main-content-card/main-content-card.component';
import { ArrayExtractPipe } from '../pipes/array-extract.pipe';
import { MainContentComponent } from './main-content.component';

describe('Main Content Component', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;
  let translateService: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TdMediaService,
        BreadcrumbService,
        TranslateService,
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      imports: [
        RouterModule,
        AppRoutingModule,
        CovalentCoreModule,
        NgxChartsModule,
        TranslateModule.forRoot(),
        Ng2BreadcrumbModule.forRoot()
      ],
      declarations: [
        MainContentComponent,
        WorksComponent,
        WhoComponent,
        ContactComponent,
        MainContentCardComponent,
        ArrayExtractPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    translateService = TestBed.get(TranslateService);
    translateService.addLangs([ 'ca', 'en' ]);
    translateService.setTranslation('en', { WHO: { title: 'Plastikaweb' } });
    translateService.setTranslation('ca', { WHO: { title: 'Plastikaweb' } });
    translateService.currentLang = 'ca';
    component.ngAfterViewInit();
  });

  it('should create sidenav component', fakeAsync(() => {
    fixture.detectChanges();
    expect(component).toBeTruthy();

  }));
// prevent from http json files (must be mocked)
  it('should update the breadcrum section language appropiately',
    fakeAsync(inject([ BreadcrumbService ], (breadcrumb) => {
      component.ngOnInit();
      fixture.detectChanges();
      expect(breadcrumb.getFriendlyNameForRoute('/who')).toEqual('who');
    })));
});