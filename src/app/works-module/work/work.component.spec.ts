import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule } from '@ngx-translate/core';

import { afDbMock } from '../../mocks/works.mock';
import { ArrayExtractPipe } from '../../pipes/array-extract.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from '../../shared/shared.module';
import { WorkComponent } from './work.component';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CovalentCoreModule,
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
        LazyLoadImageModule,
        SharedModule
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
