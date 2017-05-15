import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule } from 'ng2-translate';

import { WorksComponent } from './works.component';
import { ArrayExtractPipe } from '../pipes/array-extract.pipe';

describe('Works Component', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CovalentCoreModule,  TranslateModule.forRoot() ],
      declarations: [
        WorksComponent,
        ArrayExtractPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create works component', () => {
    expect(component).toBeTruthy();
  });
});
