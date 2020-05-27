import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getSubmittedText(): Promise<string> {
    return element(by.id('submitted-object')).getText() as Promise<string>;
  }

  enterName(name: string): Promise<void> {
    const nameInput = element(by.id('demo-name-input'));
    return nameInput.sendKeys(name) as Promise<void>;
  }

  enterDescription(name: string): Promise<void> {
    const descriptionInput = element(by.id('demo-description-input'));
    return descriptionInput.sendKeys(name) as Promise<void>;
  }

  submit(): Promise<void> {
    const submitButton = element(by.id('demo-submit-button'));
    return submitButton.click() as Promise<void>;
  }

  clear() {
    this.enterDescription('');
    return this.enterName('');
  }
}
