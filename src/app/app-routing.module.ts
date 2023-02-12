import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'template'},
  {path: 'template', title: 'Template', loadComponent: () => import('./pages/template.page').then(m => m.TemplatePageComponent)},
  {path: 'service', title: 'Service', loadComponent: () => import('./pages/service.page').then(m => m.ServicePageComponent)},
  {path: 'props', title: 'Props', loadComponent: () => import('./pages/props.page').then(m => m.PropsPageComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
