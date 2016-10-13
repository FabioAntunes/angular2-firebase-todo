import { FirebasePage } from './app.po';

describe('firebase App', function() {
  let page: FirebasePage;

  beforeEach(() => {
    page = new FirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
