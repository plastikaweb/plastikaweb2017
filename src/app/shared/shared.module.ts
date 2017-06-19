import { Angulartics2Module } from 'angulartics2';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdProgressSpinnerModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';
import { ArrayExtractPipe } from './pipes/array-extract.pipe';
import { WorksService } from './works-service/works.service';
import { ContactService } from './contact-service/contact.service';
import { SkillsService } from './skills-service/skills.service';
import { TagsService } from './tags-service/tags.service';
import { ImagesService } from './images-service/images.service';

const MATERIAL_MODULES: any[] = [
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdListModule
];
@NgModule({
  imports: [
    Angulartics2Module,
    MdProgressSpinnerModule,
    TranslateModule,
    MATERIAL_MODULES
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
  exports: [
    ActivityIndicatorComponent,
    Angulartics2Module,
    MATERIAL_MODULES
  ]
})
export class SharedModule {
}

export {
  WorksService, ContactService,
  SkillsService, TagsService,
  ImagesService
}
