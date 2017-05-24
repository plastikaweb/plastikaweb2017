import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule } from '@ngx-translate/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { WorksComponent } from './works.component';
import { ArrayExtractPipe } from '../pipes/array-extract.pipe';
import { afDbMock } from './works.mock';

describe('Works Component', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentCoreModule,
        RouterModule.forRoot([]),
        TranslateModule.forRoot()
      ],
      declarations: [
        WorksComponent,
        ArrayExtractPipe
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: AngularFireDatabase, useValue: afDbMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create works component', () => {
    expect(component).toBeTruthy();
  });

});
