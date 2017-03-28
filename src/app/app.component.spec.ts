import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

import { AppComponent } from './app.component';
import { CovalentCoreModule } from '@covalent/core';
import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from './app-routing.module';
import { WhoComponent } from './who/who.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { Http, ConnectionBackend } from '@angular/http';
import { HeaderModule } from './header/header.module';

describe('App Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        Http,
        ConnectionBackend,
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      imports: [
        AppRoutingModule,
        HeaderModule,
        TranslateModule.forRoot(),
        CovalentCoreModule.forRoot()
      ],
      declarations: [
        AppComponent,
        ActivityIndicatorComponent,
        SidenavComponent,
        WhoComponent,
        WorksComponent,
        ContactComponent
      ],
    }).compileComponents();
  }));

  xit('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
