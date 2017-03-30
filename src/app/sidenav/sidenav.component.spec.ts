import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovalentCoreModule, TdMediaService } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from 'ng2-translate';
import { ChangeDetectorRef } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BreadcrumbService, Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';

import { SidenavComponent } from './sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { WorksComponent } from '../works/works.component';
import { WhoComponent } from '../who/who.component';
import { ContactComponent } from '../contact/contact.component';
import { MainContentCardComponent } from '../main-content-card/main-content-card.component';

describe('Sidenav Component', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TdMediaService,
        TranslatePipe,
        BreadcrumbService,
        ChangeDetectorRef,
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      imports: [
        RouterModule,
        AppRoutingModule,
        CovalentCoreModule.forRoot(),
        TranslateModule.forRoot(),
        Ng2BreadcrumbModule.forRoot(),
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
    component.ngAfterViewInit();
    fixture.detectChanges();
  });

  it('should create sidenav component', () => {
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    });
  });
});
