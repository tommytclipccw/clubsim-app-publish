import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PublicRoutingModule } from '../public-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PublicRoutingModule,
  ]
})
export class PublicLayoutModule { }
