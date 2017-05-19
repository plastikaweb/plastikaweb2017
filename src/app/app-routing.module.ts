import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoComponent } from './who/who.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'who', component: WhoComponent },
  { path: 'works', loadChildren: 'app/works-module/works.module#WorksModule' },
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
