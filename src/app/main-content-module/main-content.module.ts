import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/bundles/app.module';

import { MainContentComponent } from './main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LocalizeRouterModule } from 'localize-router';

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
    SidenavComponent
  ]
})
export class MainContentModule { }
