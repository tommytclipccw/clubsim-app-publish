import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrivateLayoutComponent} from './private-layout/private-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {path: 'dashboard', component: PrivateLayoutComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PrivateRoutingModule { }
