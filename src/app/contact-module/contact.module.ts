import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { TranslateModule } from '@ngx-translate/core';
import { CovalentCoreModule } from '@covalent/core';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CovalentCoreModule,
    TranslateModule
  ]
})
export class ContactModule {

}
