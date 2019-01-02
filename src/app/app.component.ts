import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {LogUtil} from './utils/LogUtil';
import {MessagingService} from './shared/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-directus-client';
  message;
  constructor(private messagingService: MessagingService) {}

  ngOnInit(): void {
    // this.authService.login('view@view.com', '1234567890').subscribe(data => {
    //   LogUtil.d(data);
    // },
    //   data => {
    //   LogUtil.d(data);
    //   LogUtil.d('Dllm');
    // });
    const userId = 'user001';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage;
  }
}
