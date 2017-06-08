import { ITranslation } from './work.model';

export interface ISkill {
  name: string;
  order: number;
  active: boolean;
  class: string;
  icon: string;
  legend: ITranslation;
  description: ITranslation;
  proficiency: number;
  years: number;
  slug: any;
}
