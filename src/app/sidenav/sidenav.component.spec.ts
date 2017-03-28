import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';
import { CovalentCoreModule, TdMediaService } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { WorksComponent } from '../works/works.component';
import { WhoComponent } from '../who/who.component';
import { ContactComponent } from '../contact/contact.component';
import { TranslateModule, TranslatePipe } from 'ng2-translate';
import { ChangeDetectorRef } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';


describe('Sidenav Component', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TdMediaService,
        TranslatePipe,
        ChangeDetectorRef,
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      imports: [
        RouterModule,
        AppRoutingModule,
        CovalentCoreModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [
        SidenavComponent,
        WorksComponent,
        WhoComponent,
        ContactComponent
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
