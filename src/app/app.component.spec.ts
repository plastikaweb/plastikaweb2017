import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CovalentCoreModule } from '@covalent/core';
import { HeaderComponent } from './header/header.component';
import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from './app-routing.module';
import { WhoComponent } from './who/who.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      imports: [
        AppRoutingModule,
        CovalentCoreModule.forRoot()
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        ActivityIndicatorComponent,
        SidenavComponent,
        WhoComponent,
        WorksComponent,
        ContactComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
