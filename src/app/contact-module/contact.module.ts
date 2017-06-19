import { Angulartics2Module } from 'angulartics2';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    Angulartics2Module.forChild(),
    CommonModule,
    SharedModule,
    TranslateModule
  ]
})
export class ContactModule {
}
