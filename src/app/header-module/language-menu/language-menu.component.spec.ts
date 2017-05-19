import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { LanguageMenuComponent } from './language-menu.component';
import { Http } from '@angular/http';

function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

class MockedTranslateService extends TranslateService {
  getBrowserLang() {
    return 'es';
  }
}

describe('Language Menu Component', () => {
  let component: LanguageMenuComponent;
  let fixture: ComponentFixture<LanguageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TranslateService, useClass: MockedTranslateService }
      ],
      imports: [
        CovalentCoreModule,
        TranslateModule.forRoot({
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [ Http ]
        })
      ],
      declarations: [ LanguageMenuComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageMenuComponent);
    component = fixture.componentInstance;
    component.languages = [ 'ca', 'en', 'es' ];
    component.defaultLang = 'en';
  });

  it('should create language menu component', async(() => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

  it('should has the app language to browser language on loading if browser language is on list',
    async(() => {
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.currentLang).toEqual('es');
    }));

  it('should has the app language to default language on loading if browser language is not on list',
    async(() => {
      component.languages = [ 'en', 'ca' ];
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.currentLang).toEqual('en');
    }));

  it('should apply the app language to catalan from spanish on changing it',
    async(() => {
      component.ngOnInit();
      fixture.detectChanges();
      component.changeLang('ca');
      expect(component.currentLang).toEqual('ca');
    }));
});
