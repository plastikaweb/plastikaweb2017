import { AngularFireDatabase } from 'angularfire2/database';
import { Angulartics2Module } from 'angulartics2';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';
import { worksMock } from '../mocks/works.mock';

describe('Contact Component', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angulartics2Module.forRoot([]),
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        SharedModule,
        TranslateModule.forRoot()
      ],
      declarations: [ ContactComponent ],
      providers: [
        { provide: Location, useValue: null },
        { provide: AngularFireDatabase, useValue: worksMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
