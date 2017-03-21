import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CovalentCoreModule } from '@covalent/core';
import { HeaderComponent } from './header/header.component';
import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';
import { SidenavComponent } from './sidenav/sidenav.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentCoreModule.forRoot()
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        ActivityIndicatorComponent,
        SidenavComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
