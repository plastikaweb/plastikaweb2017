import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';
import { CovalentCoreModule } from '@covalent/core';

import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './works.component';
import { WorkComponent } from './work/work.component';
import { ArrayExtractPipe } from '../pipes/array-extract.pipe';

@NgModule({
  imports: [
    WorksRoutingModule,
    CovalentCoreModule,
    TranslateModule
  ],
  declarations: [
    WorksComponent,
    WorkComponent,
    ArrayExtractPipe
  ]
})
export class WorksModule {
}
