import { NgModule } from '@angular/core';

import { ContactResolver } from './contact-resolver/contact-resolver.service';
import { WhoResolver } from './who-resolver/who-resolver.service';
import { WorkResolver } from './work-resolver/work-resolver.service';
import { WorksResolver } from './works-resolver/works-resolver.service';

@NgModule({
  providers: [
    ContactResolver,
    WhoResolver,
    WorkResolver,
    WorksResolver
  ],
})
export class ResolversModule {
}

export {
  ContactResolver,
  WhoResolver,
  WorkResolver,
  WorksResolver
}
