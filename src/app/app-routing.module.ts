import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layout/public-layout/public-layout.module#PublicLayoutModule'
      }]
  }, {
    path: 'admin',
    // component: PrivateLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layout/private-layout/private-layout.module#PrivateLayoutModule'
      }]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
