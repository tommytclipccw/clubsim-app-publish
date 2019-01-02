import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EnvUtil} from '../utils/EnvUtil';
import {filter, map} from 'rxjs/internal/operators';
import {LogUtil} from '../utils/LogUtil';
import {MobileAppResponse} from './model/MobileAppResponse';
import {FileService} from './file.service';

@Injectable({
  providedIn: 'root'
})
export class MobileAppService {

  constructor(private http: HttpClient, private fileService: FileService) { }

  // items/mobile_app
  getItems() {
    return this.http.get<MobileAppResponse>(EnvUtil.api('items/mobile_app'), {params: {}})
      .pipe(filter((value, index) => {
        LogUtil.d('filter', value);
        return true;
      }))
      .pipe(map( (value) => {
        LogUtil.d('map', value);
        return value;
      }));
  }
}
