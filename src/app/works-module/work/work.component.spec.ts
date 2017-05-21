import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

import { WorkComponent } from './work.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { afDbMock } from '../works.mock';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CovalentCoreModule, TranslateModule.forRoot() ],
      declarations: [ WorkComponent ],
      providers: [
        ActivatedRoute,
        { provide: AngularFireDatabase, useValue: afDbMock[0] }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
