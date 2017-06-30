import { Observable } from 'rxjs/Observable';

import { ITag } from '../models/tag.model';

export const tagsList: ITag[] = [ {
  $key: '1',
  name: 'angular'
}, {
  $key: '2',
  name: 'opensource'
}, {
  $key: '3',
  name: 'html5'
},
];

export const tagsMock = {
  list: () => Observable.of(tagsList),
};
