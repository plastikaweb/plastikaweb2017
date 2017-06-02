import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule } from '@ngx-translate/core';

import { afDbMock } from '../mocks/works.mock';
import { ArrayExtractPipe } from '../pipes/array-extract.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from '../shared/shared.module';
import { WorksService } from '../shared/works-service/works.service';
import { WorksComponent } from './works.component';

describe('Works Component', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CovalentCoreModule,
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),
        LazyLoadImageModule,
        SharedModule
      ],
      declarations: [
        WorksComponent,
        ArrayExtractPipe
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        WorksService,
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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
