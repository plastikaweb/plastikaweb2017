import { CommonModule } from '@angular/common';
import { CovalentLayoutModule, CovalentMediaModule } from '@covalent/core';
import { MdCardModule, MdIconModule, MdListModule, MdProgressBarModule, MdSnackBarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ActivityIndicatorComponent } from '../main-content-module/activity-indicator/activity-indicator.component';
import { CookiesModule } from '../cookies-module/cookies.module';
import { CookiesSnackbarComponent } from '../cookies-snackbar-module/cookies-snackbar.component';
import { CookiesSnackBarModule } from '../cookies-snackbar-module/cookies-snackbar.module';
import { LocalizeRouterModule } from 'localize-router';
import { MainContentComponent } from './main-content.component';

@NgModule({
  imports: [
    CommonModule,
    CookiesModule,
    CookiesSnackBarModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    LocalizeRouterModule,
    MdCardModule,
    MdIconModule,
    MdProgressBarModule,
    MdListModule,
    MdSnackBarModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    MainContentComponent
  ],
  declarations: [
    ActivityIndicatorComponent,
    MainContentComponent
  ],
  entryComponents: [ CookiesSnackbarComponent ]
})
export class MainContentModule { }
