import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CovalentCoreModule } from '@covalent/core';

import { LanguageMenuComponent } from './language-menu.component';

describe('Language Menu Component', () => {
  let component: LanguageMenuComponent;
  let fixture: ComponentFixture<LanguageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentCoreModule
      ],
      declarations: [ LanguageMenuComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageMenuComponent);
    component = fixture.componentInstance;
  });

  it('should be created', async(() => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

  // it('should has the app language to browser language on loading if browser language is on list',
  //   async(() => {
  //     expect(component.currentLang).toEqual('es');
  //   }));
  //
  // it('should has the app language to default language on loading if browser language is not on list',
  //   async(() => {
  //     component.languages = [ 'en', 'ca' ];
  //     component.ngOnInit();
  //     fixture.detectChanges();
  //     expect(component.currentLang).toEqual('en');
  //   }));
  //
  // it('should apply the app language to catalan from spanish on changing it',
  //   async(() => {
  //     component.ngOnInit();
  //     fixture.detectChanges();
  //     component.changeLang('ca');
  //     expect(component.currentLang).toEqual('ca');
  //   }));
});
