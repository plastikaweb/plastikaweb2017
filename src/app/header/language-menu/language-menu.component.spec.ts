import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule, TranslateService } from 'ng2-translate';
import { LanguageMenuComponent } from './language-menu.component';

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
    component.languages = [ 'ca', 'en', 'es' ];
    component.defaultLang = 'en';
  });

  it('should create language menu component', fakeAsync(() => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

  it('should has the app language to browser language on loading if browser language is on list',
    fakeAsync(() => {
      component.ngOnInit();
      tick();
      fixture.detectChanges();
      expect(component.currentLang).toEqual('es');
    }));

  it('should has the app language to default language on loading if browser language is not on list',
    fakeAsync(() => {
      component.languages = [ 'en', 'ca' ];
      component.ngOnInit();
      tick();
      fixture.detectChanges();
      expect(component.currentLang).toEqual('en');
    }));

  it('should apply the app language to catalan from spanish on changing it',
    fakeAsync(() => {
      component.ngOnInit();
      tick();
      fixture.detectChanges();
      component.changeLang('ca');
      expect(component.currentLang).toEqual('ca');
    }));
});
