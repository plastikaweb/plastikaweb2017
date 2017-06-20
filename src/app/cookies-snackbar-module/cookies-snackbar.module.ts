import { LocalizeRouterModule } from 'localize-router';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CookiesSnackbarComponent } from './cookies-snackbar.component';

@NgModule({
  imports: [
    RouterModule,
    LocalizeRouterModule,
    MdButtonModule,
    MdIconModule,
    TranslateModule
  ],
  declarations: [ CookiesSnackbarComponent ],
  exports: [ CookiesSnackbarComponent ]
})
export class CookiesSnackBarModule {
}
