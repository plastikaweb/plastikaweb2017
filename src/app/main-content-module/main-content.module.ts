import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';
import { MainContentComponent } from './main-content.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/bundles/app.module';
import { MainContentCardComponent } from './main-content-card/main-content-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    CovalentCoreModule,
    Ng2BreadcrumbModule.forRoot()
  ],
  exports: [
    MainContentComponent
  ],
  declarations: [
    MainContentComponent,
    MainContentCardComponent
  ]
})
export class MainContentModule { }
