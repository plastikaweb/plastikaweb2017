import { Observable } from 'rxjs/Observable';

export const contactObject: any = {
  $key: 'contact',
  email: 'xxx@xxx.com',
  intro: {
    es: 'intro',
    en: 'intro'
  },
  tlfn: '000000000',
  interests: [
    {
      es: 'intereses 1',
      en: 'interest 1'
    },
    {
      es: 'intereses 2',
      en: 'interest 2'
    }
  ],
  social: [
    {name: 'facebook', section: 'contact'},
    {name: 'linkedin', section: 'header'},
    {name: 'twitter', section: 'contact'}
  ]
};

export const contactbMock = {
  object: () => Observable.of(contactObject)
};
