import {Component, OnInit} from '@angular/core';
import {AuthService, UserInfo} from './services/auth.service';
import {LogUtil} from './utils/LogUtil';
import {MessagingService} from './shared/messaging.service';
import {ClientService} from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-directus-client';
  message;
  constructor(private authService: AuthService, private messagingService: MessagingService, private clientService: ClientService) {}

  ngOnInit(): void {
    // this.authService.login('view@view.com', '1234567890').subscribe(data => {
    //   this.authService.me().subscribe((userinfo: ItemResponse<UserInfo>) => {
    //     let username = userinfo.data.id + userinfo.data.first_name + userinfo.data.last_name;
    //     this.messagingService.requestPermission(username)
    //     this.messagingService.receiveMessage()
    //     this.message = this.messagingService.currentMessage;
    //     return userinfo;
    //   });
    // },
    //   data => {
    //   LogUtil.d(data);
    //   LogUtil.d('Dllm');
    // });
    this.clientService.createSubscription((isExist: boolean) => {
      // const userId = ClientService.client.client_key;
      this.messagingService.requestPermission(ClientService.client.id);
      this.messagingService.receiveMessage();
      this.message = this.messagingService.currentMessage;
    });
  }
}
