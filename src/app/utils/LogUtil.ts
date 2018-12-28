import {environment} from '../../environments/environment';

export class LogUtil {
  static d(message?: any, ...optionalParams: any[]) {
    if (!environment.production) {
      if (optionalParams.length > 0) {
        console.log(message, optionalParams);
      } else {
        console.log(message);
      }
    }
  }
}
