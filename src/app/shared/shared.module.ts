import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule } from '@ngx-translate/core';

import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';
import { WorksService } from './works-service/works.service';
import { ContactService } from './contact-service/contact.service';
import { SkillsService } from './skills-service/skills.service';

@NgModule({
  imports: [
    CovalentCoreModule,
    TranslateModule
  ],
  declarations: [ ActivityIndicatorComponent ],
  providers: [ WorksService, ContactService, SkillsService ],
  exports: [ ActivityIndicatorComponent ]
})
export class SharedModule {
}

export { WorksService, ContactService, SkillsService }
