import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CovalentCoreModule } from '@covalent/core';

import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './works.component';
import { WorkComponent } from './work/work.component';
import { ArrayExtractPipe } from '../pipes/array-extract.pipe';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/bundles/app.module';

@NgModule({
  imports: [
    WorksRoutingModule,
    CovalentCoreModule,
    TranslateModule,
    Ng2BreadcrumbModule.forRoot()
  ],
  declarations: [
    WorksComponent,
    WorkComponent,
    ArrayExtractPipe
  ]
})
export class WorksModule {
}
