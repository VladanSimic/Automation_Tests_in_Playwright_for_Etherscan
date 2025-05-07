import { test, expect } from '@playwright/test';

test('Successful registration redirects to confirmation or login screen', async ({ page }) => {
  await page.goto('https://etherscan.io/register');

  // Fill out the form with valid data
  await page.getByLabel('Username').fill('redirectTestUser');
  await page.getByLabel('Email Address').fill('redirectuser@example.com');
  const password = 'StrongPass#123';
  await page.getByLabel('Password').fill(password);
  await page.getByLabel('Confirm Password').fill(password);

  // Accept Terms
  const tosCheckbox = page.locator('#terms');
  if (await tosCheckbox.isVisible()) {
    await tosCheckbox.check();
  }

  // Submit
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect a redirect to the verification screen or login
  await expect(page).toHaveURL(/(verifyemail|login)/i);
});
