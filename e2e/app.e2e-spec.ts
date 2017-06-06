import { ChipotleBuddyPage } from './app.po';

describe('chipotle-buddy App', () => {
  let page: ChipotleBuddyPage;

  beforeEach(() => {
    page = new ChipotleBuddyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
