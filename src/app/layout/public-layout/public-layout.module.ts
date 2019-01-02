import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PublicRoutingModule } from '../public-routing.module';
import {PublicLayoutComponent} from './public-layout.component';
import {ListingModule} from '../../components/listing/listing.module';


@NgModule({
  declarations: [
    PublicLayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PublicRoutingModule,
    ListingModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class PublicLayoutModule { }
