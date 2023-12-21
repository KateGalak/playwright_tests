import { expect, type Locator, type Page } from '@playwright/test';

export class AboutPage {
    readonly page: Page;

    readonly getAboutPage: Locator;

    constructor(page: Page) {
    this.page = page;

    this.getAboutPage = page.locator("xpath=//a[contains(text(),'About')]");

  }
}

