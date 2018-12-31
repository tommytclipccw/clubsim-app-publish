import { Component, OnInit } from '@angular/core';
import {MobileAppService} from '../../services/mobile-app.service';
import {LogUtil} from '../../utils/LogUtil';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {

  constructor(private mobileAppService: MobileAppService) { }

  ngOnInit() {
    LogUtil.d('Test');
    this.mobileAppService.getItems().subscribe(
      data => {
        LogUtil.d('message', data);
      },
      data => {
      }
    );
  }

}
