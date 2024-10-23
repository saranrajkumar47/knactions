// tests/sample.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Page navigation tests', () => {
  
  test('Navigate to home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('http://localhost:3000/');
  });

  test('Navigate to login page', async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveURL('http://localhost:3000/login');
  });

  test('Navigate to register page', async ({ page }) => {
    await page.goto('/register');
    await expect(page).toHaveURL('http://localhost:3000/register');
  });
  
});
