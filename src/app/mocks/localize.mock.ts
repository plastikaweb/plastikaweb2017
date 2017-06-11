import { Observable } from 'rxjs/Observable';

export const localizeParserMock = {
  location: {},
  translate: {},
  load: () => new Promise(() => null),
  getLocationLang: (url) => 'en',
  translateRoutes: (language) => Observable.of([])
};
