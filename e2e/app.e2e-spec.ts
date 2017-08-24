import { Com.Bdbizviz.Yujaa.UiPage } from './app.po';

describe('com.bdbizviz.yujaa.ui App', () => {
  let page: Com.Bdbizviz.Yujaa.UiPage;

  beforeEach(() => {
    page = new Com.Bdbizviz.Yujaa.UiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
