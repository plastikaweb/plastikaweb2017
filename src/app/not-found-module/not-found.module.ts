import { MdCardModule, MdIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    MdCardModule,
    MdIconModule
  ]
})
export class NotFoundModule {
}
