import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

import * as fc from 'fast-check';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should correctly submit', () => {
    page.navigateTo();

    fc.assert(
      fc.property(fc.string(), fc.lorem(), (name, description) => {
        page.enterName(name);
        page.enterDescription(description);
        page.submit();
        expect(page.getSubmittedText()).toBe(
          `Submitted object: ${JSON.stringify({ name, description })}`,
        );
        page.navigateTo();
      }),
    );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry),
    );
  });
});
