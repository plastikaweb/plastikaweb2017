import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const translations = {
  WHO: {
    proficiency: 'proficiency',
    years: 'years'
  }
};

const currentLang = 'en';

export const transMock = {
  currentLang: currentLang,
  onLangChange: () => Observable.of({
    lang: currentLang,
    translations: translations
  }),
  getTranslation: (trans) => Observable.of(translations)
};
