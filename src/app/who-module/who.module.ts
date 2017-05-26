import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { WhoComponent } from './who.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    WhoComponent
  ],
  imports: [
    CovalentCoreModule,
    TranslateModule,
    NgxChartsModule
  ]
})
export class WhoModule {
}
