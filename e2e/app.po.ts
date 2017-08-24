import { browser, by, element } from 'protractor';

export class Com.Bdbizviz.Yujaa.UiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
