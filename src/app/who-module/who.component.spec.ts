import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentCoreModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import 'rxjs/add/operator/switchMap';
import { TranslateModule } from '@ngx-translate/core';

import { afDbMock } from '../mocks/works.mock';
import { SharedModule } from '../shared/shared.module';
import { SkillComponent } from './skill/skill.component';
import { WhoComponent } from './who.component';

describe('Who Component', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          CovalentCoreModule,
          BrowserAnimationsModule,
          NgxChartsModule,
          TranslateModule.forRoot(),
          SharedModule
        ],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' },
          { provide: AngularFireDatabase, useValue: afDbMock }
        ],
        declarations: [ WhoComponent, SkillComponent ]
      })
        .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
