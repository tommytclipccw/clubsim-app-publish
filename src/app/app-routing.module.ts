import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layout/public-layout/public-layout.module#PublicLayoutModule'
      }]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
