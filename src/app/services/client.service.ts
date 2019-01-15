import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {EnvUtil} from '../utils/EnvUtil';
import {LogUtil} from '../utils/LogUtil';
import {ItemResponse} from './model/ItemResponse';
import {ClientListModel} from './model/ClientListModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  static client: ClientListModel;

  constructor(private http: HttpClient) { }

  createSubscription(callback) {
    if (localStorage.getItem('deviceId')) {
      const deviceId = Number(localStorage.getItem('deviceId'));
      this.get(deviceId).subscribe(obj => {
        ClientService.client = obj.data;
        callback();
      }, error => {
        localStorage.removeItem('deviceId');
        localStorage.removeItem('deviceToken');
        this.createSubscription(callback);
      });
    } else {
      this.create().subscribe(clearObj => {
        localStorage.setItem('deviceId', clearObj.data.id.toString());
        ClientService.client = clearObj.data;
        callback();
        // this.update(clearObj.data.id).subscribe(
        //   obj => {
        //     ClientService.client = obj.data;
        //     localStorage.setItem('deviceId', obj.data.id.toString());
        //     localStorage.setItem('deviceToken', obj.data.client_key);
        //     callback();
        //   }
        // );
      });
    }
  }

  finishSubscription(id, token, callback) {
    this.update(id, token).subscribe(data => {
      LogUtil.d('update');
      LogUtil.d(data);
      localStorage.setItem('deviceToken', data.data.client_key);
      this.subscription(id).subscribe(
        obj => {
          ClientService.client = obj.data;
          localStorage.setItem('deviceId', obj.data.id.toString());
          callback();
        }
      );
    });
  }

  private create(): Observable<ItemResponse<ClientListModel>> {
    return this.http.post <ItemResponse<ClientListModel>> (
      EnvUtil.api('items/client'),
      {'status': 'draft'},
      {}
      ).pipe(map(e => {
        LogUtil.d('create', e);
        return e;
      }));
  }

  private updateClientKey(id: number, client_key: string): Observable<ItemResponse<ClientListModel>> {
    return this.http.patch <ItemResponse<ClientListModel>> (
      EnvUtil.api('items/client/' + id),
      {'client_key': client_key},
      {}
    ).pipe(map(e => {
      LogUtil.d('update', e);
      return e;
    }));
  }

  private subscription(id: number): Observable<ItemResponse<ClientListModel>>  {
    return this.http.patch <ItemResponse<ClientListModel>> (
      EnvUtil.api('items/client/' + id),
      {'status': 'published'},
      {}
      ).pipe(map(e => {
        LogUtil.d('update', e);
        return e;
      }));
  }

  update(id: number, client_key: string): Observable<ItemResponse<ClientListModel>>  {
    return this.http.patch <ItemResponse<ClientListModel>> (
      EnvUtil.api('items/client/' + id),
      {'client_key': client_key},
      {}
    ).pipe(map(e => {
      LogUtil.d('update', e);
      return e;
    }));
  }

  private get(id: number): Observable<ItemResponse<ClientListModel>>  {
    return this.http.get <ItemResponse<ClientListModel>>(EnvUtil.api('items/client/' + id)).pipe(map(e => {
      LogUtil.d('get', e);
      return e;
    }));
  }
}
