import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly getUserField: Locator;
  readonly getPasswordField: Locator;
  readonly getLoginButton: Locator;


  constructor(page: Page) {
    this.page = page;

    this.getUserField = page.locator("xpath=//input[@placeholder='Username']");
    this.getPasswordField = page.locator("xpath=//input[@data-test='password']");
    this.getLoginButton = page.locator("xpath=//input[@data-test='login-button']")
  }


  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }


}