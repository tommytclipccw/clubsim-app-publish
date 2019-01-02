import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileListviewComponent } from './file-listview/file-listview.component';
import { QrLinkListviewComponent } from './qr-link-listview/qr-link-listview.component';
import {QRCodeModule} from 'angularx-qrcode';

@NgModule({
  declarations: [FileListviewComponent, QrLinkListviewComponent],
  imports: [
    CommonModule,
    QRCodeModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports: [
    QrLinkListviewComponent, FileListviewComponent
  ]
})
export class ListingModule { }
