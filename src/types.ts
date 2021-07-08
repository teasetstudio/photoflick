export interface IPhoto {
  farm: number;
  id: string;
  secret: string;
  server: string;
  title: string;
  owner?: string;
  ispublic?: number;
  isfriend?: number;
  isfamily?: number;
  userTags?: string;
}
