import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LogUtil} from '../utils/LogUtil';
import {filter, map} from 'rxjs/internal/operators';
import {EnvUtil} from '../utils/EnvUtil';
import {FileResponse} from './model/FileResponse';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  getFiles(id: number) {
    return this.http.get<FileResponse>(EnvUtil.api('files/' + id), {params: {}})
      .pipe(filter((value, index) => {
        LogUtil.d('filter', value);
        return true;
      }))
      .pipe(map(value => {
        LogUtil.d('map', value);
        return value;
      }));
  }
}
