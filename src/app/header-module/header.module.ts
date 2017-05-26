import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';

import { HeaderComponent } from './header.component';
import { LanguageMenuComponent } from './language-menu/language-menu.component';

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
