import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  // { path: 'contacto', component: ContactFormModule}
  { path: '',        component: WelcomeComponent,  pathMatch: 'full'},
  { path: 'home',    component: WelcomeComponent,},
  { path: 'contact', component: ContactFormComponent}
];


@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution:'legacy'})],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }
