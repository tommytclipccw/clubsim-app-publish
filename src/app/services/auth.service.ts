import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {environment} from '../../environments/environment';
import {LogUtil} from '../utils/LogUtil';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static token;
  public static BASIC_HEAD = 'Basic ';
  public static BEARER_HEAD = 'Bearer ';

  public static getToken() {
    return this.token;
  }

  constructor(private http: HttpClient) {
  }

  checkAuth(): string {
    console.log(localStorage.getItem('userAuth'));
    return localStorage.getItem('userAuth');
  }

  login(username: string, password: string) {
    return this.http.post(environment.endpoint + 'auth/authenticate', {'email': username, 'password': password}, {/*headers: {
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      }*/}).pipe(map(data => {
        LogUtil.d(data);
      if (data) {
        AuthService.token = AuthService.BEARER_HEAD + data['data']['token'];
        localStorage.setItem('userAuth', AuthService.token);
        // localStorage.setItem('username', user['name']);
        // localStorage.setItem('userRoles', user['roles']);
        // LogUtil.d(localStorage.getItem('userAuth'));
      }
      return data;
    }));
  }

  refreshToken() {
    return this.http.post(environment.endpoint + 'auth/refresh', {'token': AuthService.token}, {/*headers: {
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      }*/}).pipe(map(data => {
      // LogUtil.d(user);
      if (data) {
        AuthService.token = AuthService.BEARER_HEAD + data['data']['token'];
        localStorage.setItem('userAuth', AuthService.token);
        // localStorage.setItem('username', user['name']);
        // localStorage.setItem('userRoles', user['roles']);
        // LogUtil.d(localStorage.getItem('userAuth'));
      }
      return data;
    }));
  }

  // auth(username: string, password: string) {
  //   // let headers = new HttpHeaders()
  //   //     .set('Authorization', 'Basic '+btoa(username+':'+password));
  //   // TODO should be having a api for validation
  //   this.login(username, password).subscribe(
  //     (value) => {
  //       console.log('Next', value);
  //       AuthService.token = ' ' + value.data.token;
  //       localStorage.setItem('userAuth', AuthService.token);
  //     },
  //     (e) => {
  //       console.log('error', e);
  //       AuthService.token = null;
  //     },
  //     () => {
  //       console.log('finished');
  //     }
  //   );
  // }

  logout() {
    localStorage.removeItem('userAuth');
    AuthService.token = null;
  }
}
