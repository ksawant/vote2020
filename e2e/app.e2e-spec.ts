import { Vote2020Page } from './app.po';

describe('vote2020 App', function() {
  let page: Vote2020Page;

  beforeEach(() => {
    page = new Vote2020Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
