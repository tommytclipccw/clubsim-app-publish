import {ItemResponse} from './ItemResponse';

export class Tags {
}
export class Thumbnails {
  url: string;
  relative_url: string;
  dimension: string;
  width: number;
  height: number;
}
export class FileDetail {
  full_url: string;
  url: string;
  thumbnails: Array<Thumbnails>;
  embed: object;
}
export class FileInfo {
  id: number;
  storage: string;
  filename: string;
  title: string;
  type: string;
  uploaded_by: number;
  uploaded_on: string;
  charset: string;
  filesize: number;
  width: object;
  height: object;
  duration: object;
  embed: object;
  folder: object;
  description: string;
  location: string;
  tags: Array<Tags>;
  metadata: object;
  data: FileDetail;
}

export class FileResponse extends ItemResponse<FileInfo> {}
