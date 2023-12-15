import { test, expect } from '@playwright/test';

test('visible elements', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
});

test('log in', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
});

test('add product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
});

test('cart page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await page.click('#shopping_cart_container a');
  expect(page.url()).toBe('https://www.saucedemo.com/cart.html');
});



test('add a few product & remove', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
  await page.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  await page.click('[data-test="remove-sauce-labs-bolt-t-shirt"]');
  await expect(page.locator('a').filter({ hasText: '2' })).toBeVisible();
});

