import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-object/LoginPage';
import { ProductsPage } from '../page-object/ProductsPage';
import { AboutPage } from '../page-object/AboutPage';

test('Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const prodPage = new ProductsPage(page);

  await loginPage.goto();

  await loginPage.getUserField.pressSequentially("standard_user");
  await loginPage.getPasswordField.pressSequentially("secret_sauce");
  await loginPage.getLoginButton.click();
  await prodPage.getBurgerMenu.click();
});


test('About page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const prodPage = new ProductsPage(page);
    const aboutPage = new AboutPage(page);

  await loginPage.goto();

  await loginPage.getUserField.pressSequentially("standard_user");
  await loginPage.getPasswordField.pressSequentially("secret_sauce");
  await loginPage.getLoginButton.click();
  await prodPage.getBurgerMenu.click();
  await aboutPage.getAboutPage.click();

  expect(page.url()).toBe('https://saucelabs.com/');
  });


  test('Wrong user data/dispays error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.getUserField.pressSequentially("locked_out_user");
  await loginPage.getPasswordField.pressSequentially("secret_sauce");
  await loginPage.getLoginButton.click();
  await expect(page.locator('xpath=//div[contains(@class,"error-message-container error")]')).toBeVisible();
  
});


