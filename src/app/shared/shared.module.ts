import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule } from '@ngx-translate/core';

import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';

@NgModule({
  imports: [
    CovalentCoreModule,
    TranslateModule
  ],
  declarations: [ ActivityIndicatorComponent ],
  exports: [ ActivityIndicatorComponent ]
})
export class SharedModule {
}
