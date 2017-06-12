import { CommonModule } from '@angular/common';
import { CovalentCoreModule } from '@covalent/core';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    CovalentCoreModule,
    SharedModule,
    TranslateModule
  ]
})
export class ContactModule {
}
