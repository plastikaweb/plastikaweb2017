import { CommonModule } from '@angular/common';
import { CovalentLayoutModule, CovalentMediaModule } from '@covalent/core';
import { MdCardModule, MdIconModule, MdListModule, MdSnackBarModule } from '@angular/material';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/bundles/app.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { BreadcrumbControlComponent } from './breadcrumb-control/breadcrumb-control.component';
import { CookiesModule } from '../cookies-module/cookies.module';
import { CookiesSnackbarComponent } from '../cookies-snackbar-module/cookies-snackbar.component';
import { CookiesSnackBarModule } from '../cookies-snackbar-module/cookies-snackbar.module';
import { LocalizeRouterModule } from 'localize-router';
import { MainContentComponent } from './main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';

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
    MdListModule,
    MdSnackBarModule,
    Ng2BreadcrumbModule.forRoot(),
    RouterModule,
    TranslateModule
  ],
  exports: [
    MainContentComponent
  ],
  declarations: [
    BreadcrumbControlComponent,
    MainContentComponent,
    SidenavComponent
  ],
  entryComponents: [ CookiesSnackbarComponent ]
})
export class MainContentModule { }
