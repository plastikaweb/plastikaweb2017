import { ITag } from './tag.model';

export interface IWork {
  $key: string;
  active: boolean;
  name: string;
  subtitle: ITranslation;
  order?: number;
  url?: string;
  repo?: string;
  year: number;
  client?: string;
  partner?: string;
  opensource?: boolean;
  description: ITranslation;
  tools?: string;
  tags?: ITag[];
  slug: string;
}

export interface ITranslation {
  ca?: string;
  es?: string;
  en?: string;
  fr?: string;
}
