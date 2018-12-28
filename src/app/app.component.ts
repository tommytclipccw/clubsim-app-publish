import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {LogUtil} from './utils/LogUtil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-directus-client';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.authService.login('tommy.tc.li@pccw.com', '1234567890').subscribe(data => {
    //   LogUtil.d(data);
    // },
    //   data => {
    //   LogUtil.d(data);
    //   LogUtil.d('Dllm');
    // });
  }
}
