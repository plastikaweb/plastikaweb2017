import { Observable } from 'rxjs/Observable';

import { IWork } from '../models/work.model';

const tagList: IWork[] = [ {
  $key: '1',
  active: true,
  name: 'the project',
  subtitle: {
    ca: 'xxx',
    es: 'xxx',
    en: 'xxxx'
  },
  year: 2007,
  description: {},
  tools: 'ActionScript 2.0, PHP, XML',
  tags: 'flash',
  slug: 'the-project'
}, {
  $key: '2',
  active: true,
  name: 'the project 2',
  subtitle: {
    ca: 'xxx',
    es: 'xxx',
    en: 'xxxx'
  },
  year: 2009,
  description: {},
  tools: 'Angular, firebase',
  tags: 'angular,firebase',
  slug: 'the-project-2'
} ];

export const afDbMock = {
  list: () => Observable.of(tagList)
};
