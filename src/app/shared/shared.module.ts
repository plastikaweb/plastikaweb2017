import { NgModule } from '@angular/core';
import { CovalentCoreModule } from '@covalent/core';
import { TranslateModule } from '@ngx-translate/core';

import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';
import { ArrayExtractPipe } from './pipes/array-extract.pipe';
import { WorksService } from './works-service/works.service';
import { ContactService } from './contact-service/contact.service';
import { SkillsService } from './skills-service/skills.service';
import { TagsService } from './tags-service/tags.service';
import { ImagesService } from './images-service/images.service';

@NgModule({
  imports: [
    CovalentCoreModule,
    TranslateModule
  ],
  declarations: [
    ActivityIndicatorComponent,
    ArrayExtractPipe
  ],
  providers: [
    WorksService,
    ContactService,
    SkillsService,
    TagsService,
    ImagesService
  ],
  exports: [ ActivityIndicatorComponent ]
})
export class SharedModule {
}

export {
  WorksService, ContactService,
  SkillsService, TagsService,
  ImagesService
}
