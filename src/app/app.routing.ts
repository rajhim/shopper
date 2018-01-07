import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
const routes: Routes = [
  // {path: '', redirectTo: "/login", pathMatch: 'full'},
  // {
  //   component: TemplateComponent,
  //   path: '',
  //   canActivate: [CanActivateGuard],
  //   children: [
  //     {
  //       path: 'home',
  //       component: DashboardComponent,
  //       canActivate: [CanActivateGuard]
  //     }

  // ]},
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

