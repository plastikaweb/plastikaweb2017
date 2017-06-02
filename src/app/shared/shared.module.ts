import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule } from '@ngx-translate/core';

import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';
import { WorksService } from './works-service/works.service';

@NgModule({
  imports: [
    CovalentCoreModule,
    TranslateModule
  ],
  declarations: [ ActivityIndicatorComponent ],
  providers: [ WorksService ],
  exports: [ ActivityIndicatorComponent ]
})
export class SharedModule {
}

export { WorksService }
