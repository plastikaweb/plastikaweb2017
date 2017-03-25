import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoComponent } from './who/who.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'who', component: WhoComponent },
  { path: 'works', component: WorksComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/who', pathMatch: 'full' },
  { path: '**', redirectTo: '/who', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
