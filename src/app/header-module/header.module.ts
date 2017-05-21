import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { LanguageMenuComponent } from './language-menu/language-menu.component';
import { CovalentCoreModule } from '@covalent/core';

@NgModule({
  imports: [
    CovalentCoreModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    LanguageMenuComponent
  ]
})
export class HeaderModule { }
