import {Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import {MobileAppService} from '../../services/mobile-app.service';
import {LogUtil} from '../../utils/LogUtil';
import {MobileAppResponse} from '../../services/model/MobileAppResponse';
import {FileService} from '../../services/file.service';
import {QrLinkData} from '../../components/listing/qr-link-listview/qr-link-listview.component';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {

  items: MobileAppResponse;
  list: QrLinkData[] = null;
  @Input() fcm_subscription = false;
  fcm_token = '';
  constructor(private mobileAppService: MobileAppService, private fileService: FileService, private clientService: ClientService) { }

  ngOnInit() {
    this.fcm_token = localStorage.getItem('deviceToken');
    this.fcm_subscription = localStorage.getItem('deviceToken') !== '';
    LogUtil.d('Test');
    this.mobileAppService.getItems().subscribe(
      (values) => {
        LogUtil.d(/*'message', */values);
        this.items = values;
        this.list = [];
        // if (AuthService.token) {
        //   LogUtil.d(values.data);
          values.data.forEach((ele, i) => {
            this.fileService.getFiles(ele.uploaded_file).subscribe(file => {
              LogUtil.d(/*'message', */file);
              if (file.data.filename.match(/\w+_([\w|\W]+)_(\d+).*\.apk/g)) {
                const groups = /\w+_([\w|\W]+)_(\d+).*\.apk/g.exec(file.data.filename);
                this.items.data[i].version = groups[1];
                this.items.data[i].buildnumber = groups[2];
              }
              if (file.data.data) {
                this.items.data[i].uploaded_file_url = file.data.data.full_url;
              }
              // for ( let j = 0; j < 10; j++) {
                this.list.push({
                  name: this.items.data[i].app_name,
                  version: this.items.data[i].version,
                  environment: this.items.data[i].version_environment,
                  buildNumber: this.items.data[i].buildnumber,
                  description: this.items.data[i].description,
                  link: this.items.data[i].uploaded_file_url,
                  releaseDatetime: this.items.data[i].created_on
                });
              // }
            });
          });
        // }
      },
      data => {
      }
    );
  }

  pushNotificationChange(result: boolean) {
    this.fcm_subscription = result;
    const deviceId = Number(localStorage.getItem('deviceId'));
    if (deviceId) {
      this.clientService.update(deviceId, this.fcm_subscription ? 'published' : 'draft').subscribe(data => {
      }, error => {
        this.fcm_subscription = !this.fcm_subscription;
      });
    }
    LogUtil.d('Changed', this.fcm_subscription);
  }

}
