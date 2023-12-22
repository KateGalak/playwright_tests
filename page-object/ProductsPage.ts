import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;

    readonly getBurgerMenu: Locator;


    constructor(page: Page) {
    this.page = page;

    this.getBurgerMenu = page.locator("xpath=//button[contains(text(),'Open Menu')]");

  }
}

