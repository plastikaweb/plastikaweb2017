import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';

import { WorkComponent } from './work.component';
import { afDbMock } from '../works.mock';
import { ArrayExtractPipe } from '../../pipes/array-extract.pipe';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentCoreModule,
        TranslateModule.forRoot(),
        RouterModule.forRoot([])
      ],
      declarations: [
        WorkComponent,
        ArrayExtractPipe
      ],
      providers: [
        BreadcrumbService,
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: AngularFireDatabase, useValue: afDbMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
