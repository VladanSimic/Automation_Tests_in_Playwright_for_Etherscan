import { test, expect } from '@playwright/test';

test('Register with valid username, email, and matching passwords', async ({ page }) => {
  // Navigate to Etherscan registration page
  await page.goto('https://etherscan.io/register');

  // Fill out the form
  await page.getByLabel('Username').fill('testuser123');
  await page.getByLabel('Email Address').fill('testuser123@example.com');
  await page.getByLabel('Password').fill('StrongPassw0rd!');
  await page.getByLabel('Confirm Password').fill('StrongPassw0rd!');

  // Accept Terms of Service (if present)
  const tosCheckbox = page.locator('#terms');
  if (await tosCheckbox.isVisible()) {
    await tosCheckbox.check();
  }

  // Submit the form
  await page.getByRole('button', { name: /create account/i }).click();

  // Expect successful redirect or confirmation
  await expect(page).toHaveURL(/.*verifyemail.*/);
});
