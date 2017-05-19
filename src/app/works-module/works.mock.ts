import { IProject } from '../models/project.model';
import { Observable } from 'rxjs/Observable';

const tagList: IProject[] = [ {
  'active': true,
  'name': 'the project',
  'subtitle': {
    ca: 'xxx',
    es: 'xxx',
    en: 'xxxx'
  },
  'year': 2007,
  'description': {},
  'tools': 'ActionScript 2.0, PHP, XML',
  'tags': 'flash',
  'slug': 'the-project'
}, {
  'active': true,
  'name': 'the project 2',
  'subtitle': {
    ca: 'xxx',
    es: 'xxx',
    en: 'xxxx'
  },
  'year': 2009,
  'description': {},
  'tools': 'Angular, firebase',
  'tags': 'angular,firebase',
  'slug': 'the-project-2'
}];

export const afDbMock = {
  list: () => Observable.of(tagList)
};
