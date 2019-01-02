import {ItemResponse} from './ItemResponse';

export class MobileApp {
  id: number;
  status: string;
  created_by: number;
  created_on: string;
  modified_by: number;
  modified_on: string;
  uploaded_file: number;
  uploaded_file_url: string;
  version: string;
  buildnumber: string;
  description: string;
  mapping_file: number;
  version_environment: string;
  app_name: string;
}

export class MobileAppResponse extends ItemResponse<Array<MobileApp>> {}
