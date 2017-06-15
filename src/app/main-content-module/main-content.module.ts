import { CommonModule } from '@angular/common';
import { CovalentLayoutModule, CovalentMediaModule } from '@covalent/core';
import { MdCardModule, MdIconModule, MdListModule } from '@angular/material';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/bundles/app.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { BreadcrumbControlComponent } from './breadcrumb-control/breadcrumb-control.component';
import { LocalizeRouterModule } from 'localize-router';
import { MainContentComponent } from './main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    LocalizeRouterModule,
    MdCardModule,
    MdIconModule,
    MdListModule,
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
  ]
})
export class MainContentModule { }
