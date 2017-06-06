import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/bundles/app.module';

import { MainContentComponent } from './main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LocalizeRouterModule } from 'localize-router';
import { BreadcrumbControlComponent } from './breadcrumb-control/breadcrumb-control.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    LocalizeRouterModule,
    CovalentCoreModule,
    Ng2BreadcrumbModule.forRoot()
  ],
  exports: [
    MainContentComponent
  ],
  declarations: [
    MainContentComponent,
    SidenavComponent,
    BreadcrumbControlComponent
  ]
})
export class MainContentModule { }
