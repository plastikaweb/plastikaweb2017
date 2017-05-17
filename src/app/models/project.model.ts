export interface IProject {
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
  tags?: string;
  slug: string;
}

export interface ITranslation {
  ca?: string;
  es?: string;
  en?: string;
  fr?: string;
}
