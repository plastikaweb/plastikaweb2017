import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { CovalentCoreModule, TdMediaService } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from 'ng2-translate';
import { APP_BASE_HREF } from '@angular/common';
import { BreadcrumbService, Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';
import 'rxjs/add/operator/map';
import { SidenavComponent } from './sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { WorksComponent } from '../works/works.component';
import { WhoComponent } from '../who/who.component';
import { ContactComponent } from '../contact/contact.component';
import { MainContentCardComponent } from '../main-content-card/main-content-card.component';

describe('Sidenav Component', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
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
        CovalentCoreModule.forRoot(),
        TranslateModule.forRoot(),
        Ng2BreadcrumbModule.forRoot()
      ],
      declarations: [
        SidenavComponent,
        WorksComponent,
        WhoComponent,
        ContactComponent,
        MainContentCardComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
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
  xit('should update the breadcrum section language appropiately',
    fakeAsync(inject([ BreadcrumbService ], (breadcrumb) => {
      component.ngOnInit();
      fixture.detectChanges();
      tick();
      translateService.use('en');
      fixture.detectChanges();
      expect(breadcrumb.getFriendlyNameForRoute('/who')).toEqual('Plastikaweb');
    })));
});
