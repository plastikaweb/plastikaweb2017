import { Plastikaweb2017Page } from './app.po';

describe('plastikaweb2017 App', () => {
  let page: Plastikaweb2017Page;

  beforeEach(() => {
    page = new Plastikaweb2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
