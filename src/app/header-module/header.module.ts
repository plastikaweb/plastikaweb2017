import { CovalentCoreModule } from '@covalent/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { LanguageMenuComponent } from './language-menu/language-menu.component';

@NgModule({
  imports: [
    CovalentCoreModule,
    RouterModule
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
