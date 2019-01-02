import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from '../../_helper/AuthInterceptor';
import {ErrorInterceptor} from '../../_helper/ErrorInterceptor';
import {PrivateRoutingModule} from '../private-routing.module';
import {PrivateLayoutComponent} from './private-layout.component';

@NgModule({
  declarations: [
    PrivateLayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PrivateRoutingModule,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class PrivateLayoutModule { }
