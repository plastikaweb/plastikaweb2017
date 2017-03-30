import { async, ComponentFixture, TestBed, fakeAsync, inject } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule, TranslateService } from 'ng2-translate';

import { LanguageMenuComponent } from './language-menu.component';
import { TranslateServiceMock } from './translateServiceMock';

describe('Language Menu Component', () => {
  let component: LanguageMenuComponent;
  let fixture: ComponentFixture<LanguageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock }
      ],
      imports: [
        CovalentCoreModule.forRoot(),
        TranslateModule.forRoot()
      ],
      declarations: [ LanguageMenuComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageMenuComponent);
    component = fixture.componentInstance;
    component.defaultLang = 'en';
    fixture.detectChanges();
  });

  it('should create language menu component', () => {
    expect(component).toBeTruthy();
  });

  it('should has the app language to browser language on loading if browser language is on list',
    (inject([ TranslateService ], (translate) => {
      component.languages = [ 'en', 'es' ];
      component.ngOnInit();

      fixture.whenStable().then(() => {
        expect(translate.currentLang).toEqual('es');
      });
    })));

  it('should has the app language to default language on loading if browser language is not on list',
    inject([ TranslateService ], (translate) => {
      component.languages = [ 'en', 'ca' ];
      component.ngOnInit();

      fixture.whenStable().then(() => {
        expect(translate.currentLang).toEqual('en');
      });
    }));

  it('should apply the app language to spanish on changing it',
    fakeAsync(inject([ TranslateService ], (translate) => {
      component.languages = [ 'es', 'en', 'ca' ];
      component.ngOnInit();
      component.changeLang('es');

      fixture.whenStable().then(() => {
        expect(translate.currentLang).toEqual('es');
      });
    })));
});
