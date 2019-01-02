import {Component, Input, OnInit} from '@angular/core';

export class QrLinkData {
  name: string;
  version: string;
  environment: string;
  buildNumber: string;
  description: string;
  link: string;
  releaseDatetime: string;
}
@Component({
  selector: 'app-qr-link-listview',
  templateUrl: './qr-link-listview.component.html',
  styleUrls: ['./qr-link-listview.component.scss']
})
export class QrLinkListviewComponent implements OnInit {

  @Input() list: QrLinkData[] = null;

  constructor() { }

  ngOnInit() {
  }

}
