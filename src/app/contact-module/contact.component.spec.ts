import { AngularFireDatabase } from 'angularfire2/database';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule } from '@ngx-translate/core';

import { afDbMock } from '../mocks/works.mock';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';

describe('Contact Component', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CovalentCoreModule,
        TranslateModule.forRoot(),
        SharedModule
      ],
      declarations: [ ContactComponent ],
      providers: [
        { provide: AngularFireDatabase, useValue: afDbMock }
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
