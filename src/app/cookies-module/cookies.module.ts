import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CookiesComponent } from './cookies.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TranslateModule
  ],
  declarations: [ CookiesComponent ]
})
export class CookiesModule {
}
