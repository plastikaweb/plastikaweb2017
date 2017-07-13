import { Angulartics2Module } from 'angulartics2';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
MdButtonModule, MdCardModule, MdIconModule, MdListModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { ArrayExtractPipe } from './pipes/array-extract.pipe';
import { WorksService } from './works-service/works.service';
import { ContactService } from './contact-service/contact.service';
import { SkillsService } from './skills-service/skills.service';
import { TagsService } from './tags-service/tags.service';
import { ImagesService } from './images-service/images.service';
import { CapitalizePipe } from './pipes/capitalize.pipe';

const MATERIAL_MODULES: any[] = [
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdListModule
];
@NgModule({
  imports: [
    Angulartics2Module,
    CommonModule,
    TranslateModule,
    MATERIAL_MODULES
  ],
  declarations: [
    ArrayExtractPipe,
    CapitalizePipe
  ],
  providers: [
    WorksService,
    ContactService,
    SkillsService,
    TagsService,
    ImagesService
  ],
  exports: [
    Angulartics2Module,
    CapitalizePipe,
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
