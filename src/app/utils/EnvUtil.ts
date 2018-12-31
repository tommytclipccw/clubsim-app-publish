import {environment} from '../../environments/environment';

export class EnvUtil {
  static api(path: string) {
    return environment.endpoint + path;
  }
}
